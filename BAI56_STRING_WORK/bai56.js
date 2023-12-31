// Làm  việc với chuỗi 

// Keyword: javaScript String methods

/*
1. Length
2. Find index
3. Cut string 
4. Replace
5. Convert to upper case
6. Convert to lower case
7. Trim 
8. Split
9. Get a character by index
*/

var myString ='Linh Nguyen học js tại F8 nè Linh ơi'
// 2. Find index=> indexOf . Tìm được thì trả về vị trí đầu tiên, ngược lại  trả về -1
console.log(myString.indexOf('L', 8))// có thể truyền đối số vào 

// 3. Cut string 
console.log(myString.slice(5, 11))// cắt thuận
console.log(myString.slice(-5,-2))

// 4. Replace 
console.log(myString.replace('Linh','Bao'))// thay từ đầu tiên tìm thấy 
console.log(myString.replaceAll('Linh','Bao'))// thay tất cả
console.log(myString.replace(/Linh/g,'JavaScript'))

// 5. Convert to upper case// in hoa 
console.log(myString.toLocaleUpperCase())
// 6. Convert to lower case// chữ thương f
console.log(myString.toLocaleLowerCase())

// 7. Trim()// xóa chuỗi kí tứ trắng ở 2 đầu chuỗi 
console.log(myString.trim());

// 8. Split()// cắt chuỗi thành một array thông qua một chuỗi phân biệt giữa các kí tự trong chuỗi 

var languages = 'javaScript, PHP, Java'
console.log(languages.split(', '))

var languages = 'javaScript'
console.log(languages.split(''))

// Get a characterby index // lấy ra được một kí tự thông qua index // tìm thấy trả  về kí tự tìm thấy, ngược lại thì trả về chuỗi rỗng
const myString1 ='Linh Nguyen'
console.log(myString1.charAt(2))// cách 1

console.log(myString1[30])// với cách này nếu không tìm thấy thì nó trả về indefined;


