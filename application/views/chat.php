<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>杨洋的聊天室</title>
    <meta name="keywords" content="房猫,昆山" />
    <meta name="description" content="" />
    <link href="/css/login.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="wraper" id="login">

    <!------------头部start-------------->
    <div class="header clearfix">
        <span class="wel-login-txt">欢迎 <ykname id="ykname"><?php echo $name ?></ykname> 登录</span>
    </div>
    <!--------------头部end---------------->
    <div class="login-main clearfix">

    </div>
    <div class="clearfix">
        <ul id="chat_div">

        </ul>
    </div>
    <input type="text" id="message" class="clearfix">
    <button id="btn_send">发送</button>
</div>
<div class="footer">
    <div class="ft-inner">
        <div class="copyright clearfix">
            <a href="" class="f_logo"></a>
            <p class="ftr-p">2015 Funmall Co., Ltd. All rights reserved. 备案号：苏CP备13003602号-2</p>
        </div>
    </div>
</div>

</body>
</html>
<script src="/js/jquery-1.8.3.min.js"></script>
<script src="/chat/node_modules/socket.io/node_modules/socket.io-client/socket.io.js"></script>
<script>

    var socket = io.connect('http://192.168.1.110:8182');
    socket.emit('send_ykname',{name:$("#ykname").html()});
    socket.on('disconnect',function(){
        alert('连接失败');
    });
    socket.on('back_login',function(){
        window.location.href="/index/chat_login/";
    });
    socket.on('news',function(data){
        $("#chat_div").append("<li>" +  data.user +":" + data.message + "</li>");
    });

    $("#btn_send").click(function(){
        socket.emit('sendmsage',{message:$("#message").val(),user:$("#ykname").val()});
        $("#chat_div").append("<li>" + "我说:"+$("#message").val()+"</li>");
    })
</script>