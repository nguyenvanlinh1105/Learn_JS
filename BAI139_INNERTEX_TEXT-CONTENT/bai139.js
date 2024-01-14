//1. INNER TEXT 
//2. TEXT CONTENT


//                      INNER TEXT:ELEMENT NODE
//==> trả về text nằm ở trên trình duyệt 

var html = document.querySelector('.heading')

// thay đổi text ở element 
html.textContent='hòa mát'
html.innerText='Linh NGuyen'
// lấy nội dung text ở element 
console.log(html.textContent)
console.log(html.innerText)


//                      TEXT CONTENT : ELEMENT/TEXT NODE
// trả về text thật nằm trong dom 




// ĐIỂM KHÁC NHAU GIỮA INNER TEXT VÀ TEXTCONTENT
var html1 = document.querySelector('.heading1')
console.log(html1.textContent)
console.log(typeof html1.textContent)
console.log(html1.innerText)






