// DESTRUCTURING: phân rã arr và obj

var arr=[
    'javascript',
    'Python',
    'ruby'
]

//bài toán yêu cầu tạo ra ba biến chứa 3 giá trị của mảng
var a = arr[0];
var b =arr[1];
var c = arr[2];

// cách 3 
var [i, k, h] = arr;
var [y, ,l ] = arr;

console.log(i,k,h)
console.log(y, l)



// Toán tử Rest .. lấy ra những phần còn lại 

var [u, ...rest]= arr;
console.log(rest)// trả về một mảng  tất cả các phần còn lại trong mảng không được lấy


// phân biệt rest : sử dụng với destructuring