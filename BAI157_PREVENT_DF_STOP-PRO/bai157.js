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
ulElemet.onclick  = function(e){
    console.log(e.target)
}






// 2.Stoppropagation 