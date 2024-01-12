/*

*/
Array.prototype.map2= function(callback){
    var arr = []
    for(var i=0;i<this.length;i++){
        arr.push(callback(this[i],i))// khi lặp qua các phần tủ thì callback nhận các đối số trên 
    }
    return arr
}

var courses =[
    'Javascript',
    'PHP',
    'Ruby'
]

var newCourses= courses.map2(function(curVal){
    return `
       <h1>Khóa học: ${curVal}</h1> 
    `
}).join("")
console.log(newCourses)
// declare function 
var myFun= function(){
    console.log("I love you")
}
myFun()