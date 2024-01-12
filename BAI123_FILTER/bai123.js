Array.prototype.filter2= function(cb){
    var arr =[]
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(cb(this[i],i,this)){
                arr.push(this[i])
            }
        }
    }
    return arr
}

var courses = [
   {
        id:1,
        name:'JavaScript',
        coin :23
   },
   {
        id:2,
        name:'Java',
        coin :400
    },
    {
        id:3,
        name:'Reactjs',
        coin :23
   },
   {
        id:4,
        name:'Python',
        coin :23
    },

]

var result = courses.filter2(function(curVal){
    return curVal.coin>0
})
console.log(result)