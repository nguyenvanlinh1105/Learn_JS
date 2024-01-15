var divElement = document.querySelector('.div')
// thuộc tính style thêm hoặc thay đổi các css trên element , text
// thêm một thuộc tính css 
divElement.style.backgroundColor = 'red'
divElement.style.width= '200px'
divElement.style.borderRadius='5px'

// thêm nhiều thuộc tính css 
Object.assign(divElement.style, {
    height: '100px;',
    backgroundColor : 'yellow'

})

// get ra một thuộc tính style : 
console.log(divElement.style.width)