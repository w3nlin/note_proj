function deepCopy(obj){
　　if ( typeof obj != 'object' ){ // ( obj  instanceof Object || obj  instanceof Array )
　　　　return obj;
　　}
　　var newobj = {};
　　for ( var attr in obj) {
　　　　newobj[attr] = deepCopy(obj[attr]);
　　}
　　return newobj;
}