
/*var express = require('express');
var app = express();
app.use(express.static(__dirname));
var server = app.listen(8182);*/

var io = require('socket.io').listen(8182);
var renshu = 0;
var renming = [];

//console.log('server start');
io.sockets.on('connection',function(socket){
    //console.log('chat start');

    socket.on('disconnect',function(){
        if(socket.ykname){
            renshu = renshu -1;
            renming.remove(socket.ykname);
            io.sockets.emit('renshu',{renshu:renshu});//给所有人发送在线人员信息
            io.sockets.emit('send_all_name',{allname:renming})
        }
    })
    socket.on('other event',function(data){
        //console.log(data);
    })

    socket.on('sendmsage',function(data){
        //console.log('message:'+data.message);
        socket.broadcast.emit('news',{message:data.message,user:socket.ykname});
    })

    socket.on('send_name',function(data){
        //console.log('收到用户昵称:'+data.name)
        var flag = check(data.name);
        socket.emit('back_name',{back:flag});
    })

    socket.on('send_ykname',function(data){
        var flag = check(data.name);
        if (flag == 1){
            socket.ykname = data.name;
            renshu = renshu + 1;
            renming.push(data.name);
            io.sockets.emit('renshu',{renshu:renshu});//给所有人发送在线人员信息
            io.sockets.emit('send_all_name',{allname:renming})
            //console.log('成功进入聊天室:'+data.name);
        }else{
            socket.emit('back_login');
        }
    })


})

function check(name){
    for(var k in io.sockets.sockets){
        if(io.sockets.sockets[k] && io.sockets.sockets[k].ykname == name){
           // console.log('存在用户名:'+io.sockets.sockets[k].ykname)
            return 2;
        }
    }
    return 1;
}

//扩展数组方法：查找指定元素的下标
//author cjianquan 2016-1-14
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

//扩展数组方法:删除指定元素
//author cjianquan 2016-1-14
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    while(index>-1){
        this.splice(index, 1);
        index = this.indexOf(val);
    }
};
