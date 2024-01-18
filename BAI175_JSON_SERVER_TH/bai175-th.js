// bước 1: khởi tạo npm init 
// bước 2: cài đặt json-server 
    // npm i json-server
    //sau khi cài xong có file package json là thư viện là kho lưu trữ những gì mình sẽ cài 
// bước 3 : tạo db.json 
    // chứa các dữ liệu json dưới dạng object
// bước 4: vào package.json thực hiện thêm start="json-server --watch db.json"
//=> npm start 

var coursesAPI= "http://localhost:3000/course"
fetch(coursesAPI)
    .then(function(response){
       return response.json()
    })
    .then(function(courses){
        var ubblock= document.getElementById("courses-block")
        var html = courses.map(function(course){
            return `
            <li>
                <h2>Tên khóa học: ${course.name}</h2>
                <p>Mô tả khóa học: ${course.description}</p>
            </li>
            `
        })
        ubblock.innerHTML=html
    })
