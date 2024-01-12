Array.prototype.find2= function(cb){
    for (var i in this){
        if(this.hasOwnProperty(i)){
            if(cb(this[i],i, this)){
                return this[i]
            }
        }
    }
}
var courses = [
    {
        id : 1,
        name:'Java'
    },
    {
        id : 2,
        name:'Ruby'
    },
    {
        id : 3,
        name:'Python'
    }
    
]

var result = courses.find2(function(curVal){
    return curVal.name==='Ruby'
})
console.log(result)




