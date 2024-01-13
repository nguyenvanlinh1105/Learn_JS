// DOM attribute

var html = document.querySelector('h1')
// thêm một attribute // chỉ nằm ở trên web thôi/ chỉ có khi file js đc thực thi 
html.title='liinh'
html.id ='heading'
// thêm class => .className
html.className='heading'
console.log(html)

// thêm attribute cho thẻ a 
var html1 = document.querySelector('a')
html1.href='https://google.com.vn'
html1.target='blank'
console.log(html1)

//====> những cách ở trên người ta gọi là setter .

// sử dụng phương thức setAttribute để thực hiện thêm các thuộc tính hợp lệ và không hợp lệ cho element
// khi mà thêm những attribute không hợp lệ cho những element thì 

html.setAttribute('class','vuituoi')
html.setAttribute('id','naymet')
html.setAttribute('data','3')
console.log(html)







//                      GET_ATTRIBUTE
// với cách này thì get được tất cả thuộc tính không hợp lệ và thuocj tính hợp lệ
console.log(html.getAttribute('data'))
console.log(html.getAttribute('class'))
// với cách này thì get được những thuocj tính hợp lệ mà thôi 
console.log(html.className)



