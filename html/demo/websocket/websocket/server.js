var WebSocketServer=require('ws').Server;
var wss=new WebSocketServer({
	port:8080
});
var clients=[];
wss.on('connection',function(client){
	if(clients.indexOf(client)===-1){
		clients.push(client);
		console.log("有"+clients.length+"个客户端在线");
		client.on('message',function(msg){
			console.log("收到消息:"+msg);
			for(var c of clients){
				if(c!=client){
					c.send(msg)
				}
			}
		})
	}
	
})