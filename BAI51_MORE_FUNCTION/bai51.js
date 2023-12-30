/// TRƯỜNG HỢP 
    //1. 2 FUNCTION trùng tên. 
    //2. Khai báo biến trong hàm. 
    //3. Định nghĩa hàm trong hàm.

function showMessage(){
    console.log("Message 1");
}

showMessage();
function showMessage(){
    console.log("Message 2");
}
showMessage();// function được định nghĩa sau sẽ ghi đề function trước đó 

function showMessage(){
    console.log("Message 3");
}
showMessage();// từ những ví dụ trên cho thấy khi mình thực hiện khai báo hàm thì hàm được thực hiện và ghi đề lên nhau trước khi lời gọi hàm đầu tên dduocj gọi ra




// 2. Khai báo biến trong hàm 
function Linh(){
    var fullname= 'Linh Nguyen';
    console.log('Linh Nguyen');
}