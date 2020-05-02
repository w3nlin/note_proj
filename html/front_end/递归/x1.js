//递归:函数自己调用自己

//案例1:前两次值之和等于当前值
function fn(n){
	if(n===1||n===2) return 1;
	return fn(n-1)+fn(n-2);
}

//案例2:当前值与前一次值之和为所有值只总和
function fn(n){
	if(n===1){
		return 1;
	}
	return n+fn(n-1);
}

//案例3:从前有座山
var i=100;
fn();
function fn(){
	i--;
	if(i>=0){
		console.log("从前有座山,山里有座庙"+i);
		fn();
	}
}
