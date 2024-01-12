// forEach
Array.prototype.forEach2 = function(cb){
    for(var i in this){
        if(this.hasOwnProperty(i)){// kiểm tra xem index có phải nằm trong arr vừa định nghĩa hay không 
            cb(this[i], i ,this)
        }// this: ở đây là thằng gọi đến phuognw thức của chúng ta 
    }
}

var courses=[
    'javaScript',
    'java',
    'ruby'
]
courses.forEach2(function(cur){
    console.log(cur)
})