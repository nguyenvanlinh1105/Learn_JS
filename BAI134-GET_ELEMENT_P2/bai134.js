// lấy thẻ li trong box-1
var listItemNode = document.querySelectorAll('.box-1 li')
console.log(listItemNode)

// cách 2 để lấy li 

var boxNode = document.querySelector('.box-1')
// công việc1: sử dùng tới boxNode 
// công việc 2: sử dụng tới các li elements là con của box-1

// Công việc 1 
console.log(boxNode.querySelectorAll('li'))
// lấy ra các element li trong box node 
console.log(boxNode.querySelectorAll('p'))


