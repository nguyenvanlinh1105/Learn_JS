// Tagged template literals: 
//
//
// function hightlight([first,...strings],...values){// nhận tất cả các tham số, đầu : chữa chuỗi không chứa nội suy , thứ 2: biến nội suy thứ nhất, thứ 3; biến nội suy thứ 2. ... thứ n: biến nội suy thứ n 
//     return values.reduce(function(acc,value){
//        return [...acc, `<span>${value}</span>`, strings.shift()]
//     }, [first])
// }

function hightlight([first,...strings],...values){// nhận tất cả các tham số, đầu : chữa chuỗi không chứa nội suy , thứ 2: biến nội suy thứ nhất, thứ 3; biến nội suy thứ 2. ... thứ n: biến nội suy thứ n 
   return values.reduce(function(acc, curr){
        return acc+=`<span>${curr}</span>`+strings.shift()
   },first)
}

var brand ='NVL'
var course='Javascript'
var html =hightlight`Học lập trình ${course} tại ${brand}!`
var divBlock = document.getElementById('block')
// divBlock.innerHTML=html.join("")
divBlock.innerHTML=html

// console.log(html.join(""))
console.log(html)


