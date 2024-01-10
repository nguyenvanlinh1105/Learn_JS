/*
forEach()
every()
some()
find()
filter()
map()
reduce()
*/

var courses=[
    {
        id : 1,
        name :'Javascript',
        coin: 250
    },
    {
        id : 2,
        name:'HTML/CSS',
        coin : 0 
    },
    {
        id :3,
        name:'Ruby',
        coin :0
    },
    {
        id :4,
        name:'PHP',
        coin:400
    },
    {
        id:5,
        name:'Reactjs',
        coin:500

    }

];

// forEach:(course, index)
courses.forEach(function(course, index){
    console.log(index, course)
})

// every(): kiểm tra tất cả các phần tử trong mảng thỏa mãn một điều kiện gì đó 
// trả về boolean : lặp qua tất cả các phần tử và kiểm tra điều kiện coin thỏa mãn thì true và tiếp tục còn nếu false thì break
var isFree = courses.every(function(course, index){
    return course.coin ===0
})
console.log(isFree)

//some():kiểm tra tồn tại các phần tử trong mảng thỏa mãn điều kiện gì đó 
// trả về boolean; lặp qua các phần tử nếu một điều kiện thỏa mãn thì trả về true và dừng hàm, ngược lại false thì tiếp tục đi đến cuối mảng 
isFree=courses.some(function(course, index){
    console.log(index)
    return course.coin==0
})
console.log(isFree)

// find(): tìm kiếm trả về phần tử tìm thấy,  tìm xem trong mảng có phần tử nào thỏa mãn điều kiện hay không nếu co thì trả về phần tử tìm thấy , nếu không thì undefind
// luôn trả về phần tử đầu tiên được tìm thấy , 
var isName = courses.find(function(course,index){
    return course.name =='Ruby1'
})
console.log(isName)

// filter(): cũng tìm kiếm phần tử thỏa mãn nhma nó trả về tất cả kết quả tìm thấy
isName = courses.filter(function(course,index){
    return course.coin===0
})
console.log(isName)