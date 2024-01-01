/*
OBJECT TRONG JAVASCRIPT 


*/
// thêm một key kiểu dạng đã khai báo
var emailKey ='4email'

var myInfo={
    lastName :'Nguyễn Văn',
    firstName:'Linh',
    age:28,
    address:'Đà Nẵng-Việt Nam',
    myFunction:function(){
        console.log('Linh ơi đây là hàm')
    },
    //emailKey  theo cách này nó sẽ hiểu emailKey là một key 
    [emailKey]:'vanlinh@gmail.com.vn', 
    getName : function(){
        return this.name;
    }
}
console.log(myInfo.myFunction())
console.log(myInfo)

// Thêm một cặp key value vào object đã được tạo 
myInfo.email ='vanlinh@gmail.com'
myInfo['my-work']= 'student';
console.log(myInfo)

// Lấy value // key không có thì trả về undefined;
console.log(myInfo.address);
console.log(myInfo['my-work'])

var myKey ='address'
console.log(myInfo[myKey])// không truyền chuỗi nếu truyền chuỗi thi nó sẽ hiểu myKey là key trong object và nó đi tim 

// xóa một key có trong ojec
delete myInfo.ate;
console.log(myInfo)
