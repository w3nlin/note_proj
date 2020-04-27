let data="";    //data用于存储多个woeker共享数据
onconnect=function(e){    //必须提供名为onconnect的事件处理函数
	var client=e.ports[0];    //活得当前连接上来的客户端对象
	client.onmessage=function(e){
		if(e.data===""){
			console.log("有人想要data");
			client.postMessage(data);   //给客户端发送data数据
		}else{
			data=e.data;      //客户端提供的新消息保存在data中
		}
	}
}

//每当页面new SharedWorker("worker.js")时，就会新创建worker绑定onconnect事件函数