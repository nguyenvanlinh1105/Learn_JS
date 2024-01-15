// classList property : Đây là thuộc tính của element node 
// add 
// contains
// remove 
// tongle : có thì xóa, không thì thêm vào 
var boxElement = document.querySelector('.box')
console.log(boxElement.classList.length)// số lượng class trog element

// add 
boxElement.classList.add('red')

// contains 
console.log(boxElement.classList.contains('red'))

// remove
// setTimeout(function(){
// console.log(boxElement.classList.remove('red'))

// }, 3000)

setInterval(function(){
    boxElement.classList.toggle('red')
}, 500)
