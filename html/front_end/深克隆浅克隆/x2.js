function clone(obj){
	//判断obj类型是否是null或者数组，是null则返回null，是数组则返回数组
	if(obj===null){
		return null
	}else if({}.toString.call(obj)==="[object Array]"){
		var newArr=[];
		newArr=obj.slice();
		return newArr;
	}
	var newObj={};
	for(var key in obj){
		//判断属性值
		if(typeof obj[key]!=="object"){ //原始类型就是复制副本
			newObj[key]=obj[key]
		}else{
			//如果当前对象不是原始类型的值，再次调用clone函数，继续复制当前属性值
			newObj[key]=clone(obj[key])
		}
		
	}
	return newObj;
}

var obj1={
	name:"zs",
	age:18
}

var obj2=clone(obj1);
console.log(obj1)
console.log(obj2);