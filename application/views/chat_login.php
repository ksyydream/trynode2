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
        <span class="wel-login-txt">欢迎登录</span>
    </div>
    <!--------------头部end---------------->
    <div class="login-main clearfix">
        <img src="/images/hlw.jpg" alt="" width="750" height="340" class="fl" />
        <div class="login-content">
            <span class="login-head">用户登录</span>
        <form id="login_form" method="post" action="/index/chat">
            <div class="input-box">
                <i class="user-icon-name"></i>
                <input class="account-name" type="text" id="username" placeholder="手机号/会员名/邮箱" name="username"/> <!-- error-bor -->
                <div class="error-tip">! 请输入手机号/会员名/邮箱</div>
            </div>
            <input type="button" class="sub-btn" id="btn_login" value="登录" />
        </form>
            </div>
    </div>
   <div class="clearfix">
       <ul id="chat_div">

       </ul>
   </div>
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
    socket.on('disconnect',function(){
       alert('连接失败');
    });
    socket.on('news',function(data){
        $("#chat_div").append("<li>" +  data.message + "</li>");
    });

    $("#btn_send").click(function(){
        socket.emit('sendmsage',{message:$("#message").val()});
        $("#chat_div").append("<li>"+$("#message").val()+"</li>");
    })

    $("#btn_login").click(function(){
        if($.trim($("#username").val()) == "我说"){
            alert('名称不可用')
        }else{
            socket.emit('send_name',{name:$("#username").val()});
        }
       // window.location.href="/index.php/index/index";

    })

    socket.on('back_name',function(data){
        if(data.back == 1){
            //alert("/index.php/index/chat/"+$("#username").val());
            $("#login_form").submit();
        }else{
            alert('名称存在');
        }
    });

</script>