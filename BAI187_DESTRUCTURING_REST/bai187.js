// DESTRUCTURING: phân rã arr và obj

var arr=[
    'javascript',
    'Python',
    'ruby'
]

//bài toán yêu cầu tạo ra ba biến chứa 3 giá trị của mảng
var a = arr[0];
var b =arr[1];
var c = arr[2];

// cách 3 
var [i, k, h] = arr;
var [y, ,l ] = arr;

console.log(i,k,h)
console.log(y, l)



// Toán tử Rest .. lấy ra những phần còn lại 

var [u, ...rest]= arr;
console.log(rest)// trả về một mảng  tất cả các phần còn lại trong mảng không được lấy


// phân biệt rest : sử dụng với destructuring

// sử dụng với function 
var obj ={
    name:'javascript',
    price :100,
    image:'img1.png',
    children:{
        name: 'Python',
        price:300
    }

    
}
var {name, price, ...rest}=obj;// tên biến lưu trữ phải giống với tên key 
console.log(name, price)
// láy tên con 
var {name:parentName, children:{name:childrenName}}=obj
console.log(parentName,childrenName)

// lấy một key không có trong obj thì mình sử dụng toán tử gán gán giá trị mặc định cho nó 
var {name,description='default value'}= obj
console.log(description)


// rest sử dụng với function
function logger(a,...params){
    console.log(params)// nhận được một array 
}
logger(13,3,2,4,2,4)


/// có thể nhận vào đây một array / obj
function logobj({name, price,...rest}){
    console.log(name, price)
    console.log(rest)// lấy ra phần còn lại 
}
logobj({
    name:'javascript',
    price:100,
    description:'Description content'
})



