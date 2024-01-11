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
        id : 4,
        name :'Reactjs',
        coin :200
    }
]


var totalCoin= courses.reduce(function(acc, curr){
    console.log(curr)
    return acc+curr.coin
},0)//initial
console.log(totalCoin)


// bài toán không dùng initialvalue 

var number =[200, 200, 300, 100, 400];
totalCoin = number.reduce(function(acc, number){
    console.log(number)// lấy giá trị đầu tiên của mảng là init nếu không có init truyền vào 
    return acc+number
})
console.log(totalCoin)

console.log("Linh Nguyễn Đag làm phẳng mảng flat")
var numbers =[1, 2, [2, 3], [4, 5, 2], 9, 3]
var resultFlat = numbers.reduce(function(acc, curr){
    return acc.concat(curr)
},[])
console.log(resultFlat)


// Bài toán lấy cacsf khóa học và đưa vào một mảng mới 
var topics=[
    {
        topic:'Front-end',
        courses:[
            {
                id:1,
                title:'HTMl/CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic:'Back-end',
        courses:[
            {
                id:1,
                title:'Nodejs'
            },
            {
                id :2,
                title:'Java'
            }
        ]
    }
]

var newCourses = topics.reduce(function(acc, cur){
    return acc.concat(cur.courses)
},[])
console.log(newCourses)



var html= newCourses.map(function(curr){
    return `
    <div>
        <h2>${curr.title}</h2>
        <h2>ID: ${curr.id}</h2>
    </div> <br>
    `
}).join("")
console.log(html)