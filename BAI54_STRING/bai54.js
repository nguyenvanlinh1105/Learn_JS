/*
    CHUỖI TRONG JAVASCRIPT 

    1. Tạo chuỗi 
        - các cách tạo chuỗi 
        - Nên dùng cách nào ? Lí do 
        - kiểm tra data type: typeof
    2. Một số case sử dụng backslash(\)
    3. Xem độ dài chuỗi 
    4. Chú í độ dài khi viết code 
    5. Template string ES6


*/

var myString = 'Linh Nguyen' // cách 1: nên xài
var myString1 = new String("Linh Nguyen oi day la cach 1");// không nên xài theo cách này
// cách 2: dài dòng, cách 1 nhanh hơn , kiểu dữ liệu c2 tạo ra là một object không phải là  string => tạo ra kiểu dữ liệu không mong muốn. // nguyên nhân là khởi tạo đối tượng theo từ khóa new 

console.log(typeof myString)//
console.log(myString1);

var fullName = 'Linh Nguyen là \'Sieu nhan\''// backsflash
console.log(fullName)

var cheo = 'Day la dau gach cheo nguoc \\'
console.log(cheo)
var len = fullName.length;
console.log(len)


// 4. Chu i do dai khi viet code
// 5. Template String 
var firstName = 'Linh';
var lastName ='Nguyen';
console.log('Toi ten la '+firstName)
console.log(`Toi ten la ${firstName} ${lastName}`)