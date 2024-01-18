// FETCH :

// front-end 
// back-end 

// API : application programing interface 

//Cổng giao tiếp giữa các PM
// Backend -> API->Fetch -> JSON/XML
//=> JSON.parse=> javascript type
// render ra giao diện với HTML
var postAPI='https://jsonplaceholder.typicode.com/posts'

    // stream : response: chính là một promise // phản hổi 
fetch(postAPI)// fetch sử dụng Promise trả về cho chúng ta .then 
    .then(function(response){
        return response.json()
        // tự động json.parse -> javascript type 
        //response: là một đối tượng //response.json()=> trả về một pomise  và ta sẽ nhận lại được tất cả đối tượng trong posts
    })
    .then(function(posts){
        var ulblock = document.getElementById("users-block")
        var html =posts.map(function(post){
            return `
                <li>
                    userID: ${post.userId} <br>
                    id:${post.id}
                    <h2>title:${post.title}</h2>
                    <p>body:${post.body}</p>
                </li>
            `
        }).join("")
        ulblock.innerHTML=html
    })
    .catch(function(err){
        console.log(err)
    })

