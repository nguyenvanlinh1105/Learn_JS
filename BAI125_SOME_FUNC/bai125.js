Array.prototype.some2= function(cb){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(cb(this[i],i,this)){
                return true
            }
        }
    }
    return false
}

Array.prototype.every2= function(cb){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(!cb(this[i],i,this)){
                return false
            }
        }
    }
    return true
}
var courses = [
    {
        id : 1,
        name:'JavaScript',
        coin:200
    },
    {
        id : 1,
        name:'JavaScript',
        coin: 300
    },
    {
        id : 1,
        name:'JavaScript',
        coin: 0

    },
]

var html = courses.some2(function(curVal){
    return curVal.coin==0
})
console.log(html)

 html = courses.every2(function(curVal){
    return curVal.coin>0
})
console.log(html)


