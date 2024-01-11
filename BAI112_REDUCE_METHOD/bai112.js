Array.prototype.reduce2 = function(callback, result){
    let i =0;
    if(arguments.length<2){
        i=1
        result= this[0]
    }
    for(;i<this.length;i++){
        result = callback(result, this[i], i, this)
    }
    return result

}

var numbers =[1, 4, 2, 4,2 ,5]
var result = numbers.reduce2((total, number)=>{
    return total+number
})
console.log(result)




 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr){
    return arr.reduce(function(result, cur){
        console.log(cur[0])
        var key =cur[0]
        var value = cur[1]
        result[key]= value
        return result
    },{})
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
