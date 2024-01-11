/// map(), reduce

//map: chỉnh sửa element của array 

var courses=[
    {
        id :1,
        name:'Javascript',
        coin:400
    },
    {
        id :2,
        name:'Ruby',
        coin:0
    },
    {
        id : 3,
        name:'HTML/CSS',
        coin:100
    },
    {
        id :4 ,
        name:'Reactjs',
        coin: 300
    }
]
// nhận lại một mảng có số lượng phần tử bằng ố lượng phần tử có giá trị của mảng cũ 
var newCourses = courses.map(function(course, index, array){
    return {
        id : course.id,
        name:`Khoa hoc: ${course.name}`,
        coin:course.coin,
        coinText:`Gia : ${course.coin}`
    }

});

console.log(newCourses)

// tach
var newCourses1 = courses.map(function(course, index){
    return {name:`Khoa hoc ${course.name}`}
})





