// let, const

// var / let , const : scope , hosting : đưa lên trên đầu , 
// const / var/let : assignment : gán lại 



// code  block 
if(true ){
    var courses ='javascript';// nếu khai báo let thì không thể sử dụng ngoài 
}
console.log(courses)


//var hỗ trọ hosting 
a = 30 

console.log(a)


// code thuần : var 
// babel: lib => const và let 
// định nghĩa biến và không gán lại thì dùng const 
// định nghĩa biến và cần gán lại thì dùng let 