
Array.prototype.forEach2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            cb(this[index],index)
        }
    }
}


var courses =[
    'JavaScript',
    'Ruby',
    'Reactjs'
]


 courses.forEach2(function(curVal, index){
        console.log("index :"+index +"**Value: "+curVal)
    })