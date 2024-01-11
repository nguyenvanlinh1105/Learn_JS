
var courses =[
    {
        id : 1,
        name :'JavaScript',
        coin :100
    },
    {
        id : 2,
        name :'HTML,CSS',
        coin :400
    },
    {
        id : 3,
        name :'Ruby',
        coin :300
    },
    {
        id : 1,
        name :'Reactjs',
        coin :200
    }
]
// var tong = 0
// for (var i of courses){
//     tong  += i.coin
// }

// console.log(tong)

var  i = 0;
var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex, ArrayOrigin){
    i++
    console.log(i, accumulator)
    return accumulator+currentValue.coin
}, 0)
console.log(totalCoin)


