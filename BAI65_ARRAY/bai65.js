/*

1. Tạo mảng 
    - Cách tạo 
    - sử dụng cách nào? tại sao ?
    - Kiểm tra data type : type của một array là object 
2. Truy xuất mảng 
    - Độ dài mảng 
    - Lây phần tử theo index 

*/

var languages =[
    'JavaScript',
    'PHP',
    'Ruby',
    null,
    undefined, 
    function(){

    }
]//cách 1: Nên dùng cách này array chứa được tất cả các kiểu dữu liệu 
console.log(typeof languages)

for( l of languages){
    console.log(l);
}

// cách 2: 
var courses = new Array('PHP', 'JavaScript', 'Java','Ruby');

console.log(typeof courses)
// kiểm tra array và object 

console.log(Array.isArray(courses))// kiểm tra thằng này là đúng là array hay không 

//  2. Truy xuất mảng

// 2.1 Độ dài mảng

console.log(courses.length)
// 2.2 Lấy phần tử theo index 
console.log(languages[1])


for(l in courses){// for in : lấy index. 
    console.log(courses[l])
}