// 1.PreventDefault 

var aElement = document.querySelectorAll('a')
var aElements = document.anchors;// lấy ra các thẻ a có name
var aElement1 = document.links;// trả về tất cả thẻ a

for(var i =0;i<aElement.length;i++){
    aElement[i].onclick = function(e){
        if(!e.target.href.startsWith("https://f8.edu.vn")){
            e.preventDefault();// ngăn chặn hành vi mặc định của thẻ a 
        }
    }
}


var ulElemet = document.querySelector('ul')
ulElemet.onmousedown= function(e){
    e.preventDefault();
}
ulElemet.onclick  = function(e){
    // mình click vào thằng ul, nhma khi mình click vào thằng con của nó thì vẫn ăn và nổi bọt ra ngoài 
    // bỏ hành vi mặc định cua nó là được 
    console.log(e.target)
}


// 2.Stoppropagation : ngăn chặn hành vi nổi bọt từ lớp con ra ngoài lớp cha 
divElement = document.querySelector('div')
divElement.onclick = function(e){
    console.log("DIV")
}

divElement = document.querySelector('button')
divElement.onclick = function(e){
    e.stopPropagation();// n
    console.log("Click me!")
}
