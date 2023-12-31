/*
    1. Tham số?
        - Định nghĩa 
        - Kiểu dữ liệu : không giới hạn kiểu dữ liệu 
        - Tính private : một biến làm tham số thì có tính private  chỉ được sử dụng biến đó trong hàm thôi không sử dụng được bên ngoài
        - 1 Tham số 
        - Nhiều tham số
    2. Truyền tham số 
        - 1 tham số 
        - 2 nhiều tham số 
    3. Argument 
        - Đối tượng argument 
        - Giới thiệu vòng for

*/

function myFunction(messager, messager2){
    console.log(typeof messager);// tham số
    console.log(messager2)
}
myFunction("Hello LinhNguyen", "ban la mot nguoi tuyet voi")// đối số 





 // sử dụng for of: lấy giá trị sau mỗi lần lặp// lấy index sau mỗi lần lặp. 
// argument nhân vô số tham số khi truyền vào hàm. 
 
function myFUNCITON( ){
    var myString ='';
    for(var param of arguments){
        myString +=`${param} -  `
    }
    console.log(myString)
}
myFUNCITON('linh','bao','hoa')