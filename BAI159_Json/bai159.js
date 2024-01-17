/*
JSON là gì ?
    - là một định dạng dữ liệu (chuỗi)- JAVASCRIPT OBJECT NOTATION 
    JSON: thể hiện Number,Boolean, Null, Array, Object, 
*/
// mã hóa enCode
// giải mã: decode 

// Stringify: chuyển đổi từ javascript sang kiểu tring dưới dạng JSON
// Parse: chuyển đổi từ json sáng kiểu dữ liệu khác 

var json = 'null'
var jsond='"chuoi"'
var json1 ='["javaScript", "PHP"]'// thể hiện kiểu array 
var json2='{"name":"Linh Nguyên", "age":23,"address":"da nang"}'

var a = JSON.parse(json1)
console.log(a)

var arr=["Linh ","Hoa","Hai"]
console.log(JSON.stringify(arr))

