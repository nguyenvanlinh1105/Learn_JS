// Fetch : 
// JSON server : API Server 
// các bước tạo json -server 
    // bước 1: npm init => enter đến khi yes ok 
    //=> tạo ra package json trong thư mục
    //bước 2: npm i json-server
    // có một dữ iệu trong package.json thì đã thành công 

    // bước 3: tạo json db.jon 
    // ở db.json mình tạo xong
    // packgage.json thì mình thêm start ="json-server --watch db.json"
    // vào npm start lên 
    

var coursesAPI ="http://localhost:3000/courses"
fetch(coursesAPI)
    .then(function(response){
        return response.json()// return promise và obj được parse từ API
    })
    .then(function(courses){
        var ubblock= document.getElementById("courses-block")
        var html= courses.map(function(course){
            return `
                <li> 
                    <h2>Tên khóa học:${course.title}</h2>
                    <p>Miêu tả khóa học:${course.description}</p>
                </li>
            `
        }).join("")
        ubblock.innerHTML=html
        console.log(courses)
    })