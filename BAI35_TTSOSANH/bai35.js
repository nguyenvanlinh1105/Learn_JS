// Toán tử so sánh bằng 

/*
    * ===  // so sánh giá trị , kiểu dữ liệu 
    * !==
*/


var a = 1;
var b = '1';
console.log(a==b)// chỉ so sánh value
console.log( a===b);


console.log(a!=b);// mặc dù khác kiểu dữ liệu nhưng nó chỉ quan tâm đến kiểu dữ liệu 
console.log(a!==b)


// Những kiểu dữ liệu convert sang boolean thì nó là false
/*
    1. false
    2. 0
    3. chuỗi rỗng
    4. null
    5. undefined
    6. NaN(not a number)
*/
console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false

// Còn những kiểu dữ liệu khác khi convert sang boolean đều là true 
console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true

/*
!! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định".
 Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
*/