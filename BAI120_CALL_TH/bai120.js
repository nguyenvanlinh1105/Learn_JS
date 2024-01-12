// forEach
Array.prototype.forEach2 = function(cb){
    for(var i in this){
       
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