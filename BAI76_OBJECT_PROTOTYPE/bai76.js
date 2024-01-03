// OBJECT PROTOYPE: định nghĩa thêm phương thức thuộc tính cho hàm tạo sau khi thực hiện tạo ra object constructor
/*
1. Prototype là gì: là những cái định nghĩa , nguyên mẫu của những đối tượng.: cấu thành nên một đối tượng :thuộc tính +phương thức 
2. Sử dụng khi nào 

*/
// Object constructor phải  add thuộc tính phương thức từ bên trong 
// Object prototype có thể add thuộc tính phương thức từ bên ngoài 

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName= function(){
        return `${this.lastName} ${this.firstName}`
    }
}
var user = new User('Linh', 'Nguyen', 'avatar1');
User.prototype.className ='F8';// thêm thuộc tính cho User sau khi đã định nghĩa lớp object constructor
console.log(user.className)
User.prototype.getClassName = function(){
    return this.className;
}
console.log(user.getClassName())


