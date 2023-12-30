/*
 ** Các loại function 

 1. Declaration function 
 2. Expression function 
 3. Arrow function 

*/

// Declaration function 

function myShow(){
    console.log("Day la declaration function");
}
myShow();

/// Expression function : khai báo biến hàm : hay là gán hàm cho một biến 
var showMessage = function(){
    console.log('Day la expression function');
}
showMessage();
        // ví dụ thêm về expression function 
         setTimeout(function(){
            console.log("Linh nguyen day la expression function");
         }, 1000)


var myObject ={
    myFunction: function(){
        console.log("Day cung là expression function");
    }
}
console.log(myObject.myFunction())


/// ARROW FUCNTION 

 showMessage<>{ 
    console.log("")
}