// Vòng lặp lòng nhau = nest-loop

var myArray =[
    [1, 2],
    [3, 4],
    [5, 6]
]
var arr = []
for(var i =0;i<myArray.length;i++){
    for(var j = 0;j<myArray[i].length;j++){
        arr.push(myArray[i][j])
    }
}
console.log(arr)
for(var i= 0 ;i<=100;i+=5){
    console.log(i)
}
console.log("linh ngue")