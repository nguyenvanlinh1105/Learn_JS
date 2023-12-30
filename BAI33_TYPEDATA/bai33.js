/*
*Lí thuyết :
1. Kiểu dữ liệu nguyên thủy , Primitive Data
    - Number
    - String
    - Boolean
    - Undifined
    - Null
    - Symbol
2. Kiểu dữ liệu phức tạp- Complex Data
    - Function : là dạng dữ liệu hàm, và ta có thể tạo ra hàm lưu nó vào một vùng nhớ 
    - Object : array - object , kiểu dữ liệu tham chiếu.
    - 
*/
// Number type 
var a = 1;// cpu xu li / luu lại dữ liệu trong quá trình thực thi 
var b = 2;
var c = 3.4;
console.log(a, b, c)

// String type
var fullName ='LinhNguyen va \'thi la" ai do';
console.log(fullName);

// boolean type 
var isSuccess = false ;
console.log(isSuccess)

// Undefined type : khi ban khai bao mot bien va khong gan gia tri cho no thi la undefined;
var bb;
console.log(bb);

// Null type
var isNull = null;
console.log(isNull)

// Symbol

var  id = Symbol('id');// unique : duy nhất 
var id2 = Symbol('id'); // unique
console.log(id ===id2)// khác nhau .




//////////
// FUNCTION 
var myFunction= function(){
    alert("Toi yeu ban ra nhieu");
}// function tu dinh nghia
myFunction();


// Object type
//-Object
var Objects= {
    name:'Linh Nguyenn',
    age:'Hoc bai',
    address:'Da Nang',
    'school':'UTE',// co thể để key trong dấu ngoặc đơn hoặc không nếu bạn muốn.
    myFunction_Name : function(){
        
    }
}
console.log(Objects)
//- Array:

var myArray=[
    'Linh Nguyen',
    'Le Bao'

];// có key và value : key 0->n; value : tương ứng với key 
console.log(myArray);
