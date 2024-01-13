/*
    HTML DOM 
    1. Element : ID, class, tagname, CSS selector, HTML collection 
    2. Attribute:
    3. Text

*/



/// ELEMENT 

//1 . Get ID
var html = document.getElementById("heading")
console.log(
     html
)
// 2. get class 
html = document.getElementsByClassName("heading")
console.log(
     html
)

// 3. get Tagname
html = document.getElementsByTagName("h1")
console.log(
     html
)

// CSS selector
html = document.querySelector(".box .heading-2")
console.log(
     html
)
// lấy phần tử thứ i 
html = document.querySelector(".box .heading-2:first-child")
console.log(// lấy ra heading -2 đầu tiên 
     html
)

html = document.querySelector(".box .heading-2:nth-child(2)")
console.log(// lấy ra heading -2 đầu tiên 
     html
)
// lấy tất cả node list và trả về một nodeList
html = document.querySelectorAll(".box .heading-2")
console.log(
    html,
     html[2]
)
// html collection=> trả về html collection 
console.log(document.forms)
//   truy xuất các form qua key 
console.log(document.forms['form-1'])

// anchor trả về các thẻ a có thuộc tính name 
console.log(document.anchors)
