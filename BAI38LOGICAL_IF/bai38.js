// Hiểu hơn về câu lệnh điều kiện
// Và phép so sánh 


var a=1;
var  b= 2
var result = a<b && a>0;
console.log(result);
if(result){
    console.log("a<b");
}else{
    console.log("b>a")
}

// Toán tử &&

var result = 'A' && 'Linh' &&'C';// đi từ trái sang phải  gặp giá trị khác false thì nó sẽ tiếp tục đi và gán giá trị cuối cùng cho biến result; // ngược lại nếu gặp biến false thì gán giá trị false cho result rồi kết thúc 
console.log(result)

/// Toán tử ||
var result = NaN|| null;// đi từ trái sang phải nếu gặp giá trị truthy thì thực hiện gán rồi kết thúc// ngược lại nếu không có giá trị truthy thì thực hiện gán giá trị cuối cùng cho result;
console.log(result)