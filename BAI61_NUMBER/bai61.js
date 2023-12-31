var d= Number.parseFloat('linh nguyen 14')

console.log(Number.parseFloat('18 is my age')) // chỉ đọc được số ở đầu chuỗi 


/*
1. Tạo giá trị number 
     - Các cách tạo 
     - Dùng cách nào tạo tao 
     - Kiểm tra datatype 
2. Làm việc với Number 
     - To String
     - To Fixed

*/

var age = 18
var PI = 3.14 // cách 1: nên dùng 
console.log(age)
var number  = new Number(6)// Cách 2: Không nên dùng cách này // Khởi tạo một đối tượng , dài dòng, hiệu quả không mong muốn , kiểu dữ liệu là object 

// kiểm tra kiểu dữ liệu 
console.log(typeof PI);
console.log(typeof number);


// 2. 2 toFixed : làm tròn số thập phân 
var Num = 44
console.log(Num.toString())
console.log()
 
var num1= 345.65768
console.log(num1.toFixed(2))// lay 2 so thap phan