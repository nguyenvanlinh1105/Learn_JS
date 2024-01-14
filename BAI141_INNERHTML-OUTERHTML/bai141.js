// 1 ELement
// 2 Attribute 
// 3. Text 



// THÊM ELEMENT - ATTRIBUTE - TEXT
// INNERHTML, outerHTML  thuộc tính của element node

var boxElement = document.querySelector(".box")
// Thêm ELEment => attribute => text 

console.log(boxElement.innerHTML)
console.log(boxElement.outerHTML)

// Cách lấy ra innerHTML
// console.log(document.querySelector('.box').innerHTML)

//              outerHTML

boxElement.outerHTML='<h1>LINH VAN NGUYEN</h1>'
console.log(boxElement)// vẫn còn cái cũ, còn ở đây là còn trong bộ nhớ thôi , bản chất thì nó đã bị ghi đè mất rồi, trong DOM không còn nữa  
console.log(boxElement.innerHTML)

// phân biệt innerHTML, và outerHTML

// innerHTML  => là bên trong nên nó sẽ lấy ra được thẻ h1
// outerHTML => là bên ngoài nó lấy luôn cả thể div 
