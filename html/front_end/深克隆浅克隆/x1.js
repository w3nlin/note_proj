function clone(obj){
	var newObj={};
	for(var key in obj){
		newObj[key]=obj[key]
	}
	return newObj;
}

var obj1={
	name:"zs",
	age:18
}

var obj2=clone(obj1);
console.log(obj1);
console.log(obj2);