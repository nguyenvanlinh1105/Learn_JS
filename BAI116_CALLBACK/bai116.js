/*
Callback : ?
=> là hàm và được truyền qua đối số.
=> khi  gọi các hàm khác 


*/
function myFun(callback){
    if(typeof callback ==='function'){
        callback("Hiehe")
    }
}

function callback(value){
console.log("Linh NGuyehn: "+value)

}
myFun(callback)