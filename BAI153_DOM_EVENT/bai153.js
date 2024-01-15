// DOM event 
// 1. Attribute event : sử dụng lắng nghe attribute
// 2. Asign event using the element node : sử dụng gán sự kiện thao tác của người dùng 

/*
onclick : click lên màn hình trình duyệt 

 khi thao tác lên một element con của thẻ cha thì xảy ra hiện tượng nổi bọt thì nó sẽ tác động lên thẻ con trước và tác dộng lên thẻ cha sau khi tác động vào thẻ con 
*/
 
var h1Element = document.querySelectorAll('h1')
for(var i=0;i<h1Element.length;i++){
    h1Element[i].onclick = function(event){
        // target sẽ trả về chính element đang lắng nghe event này 
        console.log(event.target)
    }
}
console.log(i)





