//SPREAD (...)
// toán tử dải 
// nhiệm vụ là nối 2 mảng lại với nhau không sử dụng concat mà sử dụng toán tử spread
var arr =['javascript','ruby','php']
var arr2=['dark','html']
// var arr3 = arr.concat(arr2)
var arr3 =[...arr2,...arr]
console.log(arr3)

// nối 2 obj 
var obj1={
    name:'javascript'
}
var obj2={
    price:100
}
var obj3 ={...obj1,...obj2}
console.log(obj3)


function logger(a, b, c){
    console.log(a, b, c)
}
logger(...arr)

function logger1(a,...rest){
    console.log(rest)
}

logger1(...arr)