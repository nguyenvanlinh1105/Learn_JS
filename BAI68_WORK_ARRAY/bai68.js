/*
* Làm việc với mảng : Javascript array methods
    -ToString
    -Join 
    -Pop
    -Push
    -Shifts
    -Unshift
    -Splicing 
    -Concat
    -Slicing: mỗi hàm này không làm thay đổi mảng còn lại làm thay đổi hết

*/

// 1 ToString: chuyển kiểu dữ liệu từ array sang String 

var languages =[
    'JavsScript',
    'PHP',
    'Ruby'
]
console.log(languages.toString())

//2.Join : biến một mảng thành một chuỗi với các phần tử phân cách bởi kí tự nhập vào từ join ()
console.log(languages.join('--'));

//3. Pop: Xóa phần tử ở cuối array, và trả về phần tử vừa xóa 
console.log(languages.pop());//mảng trống và pop thêm cái nữa thì trả về undifined. 

// 4. Push: thêm một phần tử vào cuối mảng 
console.log(languages.push('Java'))// trả về độ dài của mảng mới vừa thêm vào.
console.log(languages)

// 5. Shift: Xóa phần tử ở đầu mảng và trả về phần tử vừa xóa. 
console.log(languages.shift())
console.log(languages)

// 6.Unshift:thêm phần tử vào đầu mảng và trả về độ dài của mảng vừa thêm vào 
console.log(languages.unshift('Linh ngjuyen', 'bao le'))
console.log(languages)
// Splicing : xóa chền thêm một phần tử bất kì vào trong array
// xóa : trả về phần tử đã xóa
console.log(languages.splice(0, 2))//(vị trí bắt đàu, xóa bao nhiêu phần tử ) => Kết quả làm thay đổi mảng 
console.log(languages)
// chèn : chèn vào vị trí bất kì 
console.log(languages.splice(1, 1, 'Linh', 'Hoa', 'Hai'))// xóa Java và thay vào đó là Linh
console.log(languages)

//concat : nối array
var coursers =[
    'JS',
    'Python',
    'Rust'
]
console.log(languages.concat(coursers))


// Slicing : cắt một vài phần tử trong mảng , hoặc tất cả 
console.log(languages.slice(1,3))// trả về một mảng // Không làm thay đổi amgnr 
console.log(languages)

// copy mảng
var lang = languages.slice(0)
console.log(lang)