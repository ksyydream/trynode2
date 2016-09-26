<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>杨洋的聊天室</title>
    <link href="/css/login.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .login-main {
            background:gainsboro;
        }

        .send {
            position:relative;
            width:150px;
            height:35px;
            background:#F8C301;
            border-radius:5px; /* 圆角 */
            margin:30px auto 0;
        }

        .send .arrow {
            position:absolute;
            top:5px;
            right:-16px; /* 圆角的位置需要细心调试哦 */
            width:0;
            height:0;
            font-size:0;
            border:solid 8px;
            border-color:#4D4948 #4D4948 #4D4948 #F8C301;
        }
    </style>
</head>
<body>


<div class="wraper" id="login">

    <!------------头部start-------------->
    <div style="margin: auto 0" class="header clearfix">
        <span class="wel-login-txt">欢迎 <ykname id="ykname"><?php echo $name ?></ykname> 登录</span>

    </div>
    <div style="width: 200px">当前 <flag id="renshu">0</flag> 人在线</div>
    <div id="all_name">
    </div>
    <!--------------头部end---------------->
    <div id="send_div2" style=" height:400px;width:90%;margin: auto 0; overflow:auto" class="login-main clearfix">
        <ul id="send_ul">
            <li>[系统管理员]:欢迎登陆!<?php echo $name ?></li>
        </ul>

    </div>
    <input type="text" style="width: 90%" id="message" onkeydown='if(event.keyCode==13) $("#btn_send").click();' class="clearfix">
    <button id="btn_send">发送</button>
</div>
<div class="footer">
    <div class="ft-inner">
        <div class="copyright clearfix">
            <a href="" class="f_logo"></a>
        </div>
    </div>
</div>

</body>
</html>
<script src="/js/jquery-1.8.3.min.js"></script>
<script src="/chat/node_modules/socket.io/node_modules/socket.io-client/socket.io.js"></script>
<script>

    var socket = io.connect('http://121.40.97.183:8182');
    //var socket = io.connect('http://localhost:8182');
    socket.emit('send_ykname',{name:$("#ykname").html()});
    socket.on('disconnect',function(){
        alert('连接失败');
    });
    socket.on('back_login',function(){
        window.location.href="/index/chat_login/";
    });
    socket.on('news',function(data){
        var d = new Date()
        var timestr = d.getFullYear()+"/" + (d.getMonth()+1) +"/"+ d.getDate() +" " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
        $("#send_ul").prepend("<li>"+ timestr +" [" +  data.user +"]:" + data.message + "</li>");
    });

    socket.on('renshu',function(data){
        $("#renshu").html(data.renshu);
    });
    $("#btn_send").click(function(){
        var d = new Date()
        var timestr = d.getFullYear()+"/" + (d.getMonth()+1) +"/"+ d.getDate() +" " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
        socket.emit('sendmsage',{message:$("#message").val(),user:$("#ykname").val()});
        $("#send_ul").prepend("<li>"+ timestr +" [我说]:"+$("#message").val() +"</li>");
    })

    socket.on('send_all_name',function(data){
        $("#all_name").html("<span>" + data.allname +"</span>")
    })
</script>