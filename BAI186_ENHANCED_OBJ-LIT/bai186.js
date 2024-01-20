// 1. Định nghĩa key và value cho obj 
// 2. Định nghĩa method cho obj 
// 3. Định nghĩa key cho obj dưới dạng biến



// 1 Định nghĩa key và value cho object
var name = 'javascript';
var price =100;
var course={
    name : name,
    price : price
}
console.log(course)
///// => bằng với cách trên ta có thể khơi tạo một obj như sau 
var course1={
    name, 
    price
}
console.log(course1)




// 2 định nghĩa method cho obj 
var course2 ={
    name, 
    price,
    getName: function(){
        return name
    }
}
// bằng cách trên ta có thể thực hiên như sau 
var course2 ={
    name, 
    price,
    getName(){
        return name
    }
}


/// ĐỊnh nghĩa key cho object dưới dạng biến 
fieldName = 'new-name';
fieldPrice ='price'
const coures3={
    [fieldName]:'javascript',
    [fieldPrice]:100
}

console.log(coures3)