var postAPI='https://jsonplaceholder.typicode.com/posts'
fetch(postAPI)
    .then(function(response){
        return response.json();
        // trả về 1 promise và tự động parse 
    })
    .then(function(posts){
        var ublock = document.getElementById("users-block")
        var html = posts.map(function(post){
            return `
                <li>
                    <h2>title:${post.title}</h2>
                    <p>${post.body}</p>
                </li>
            `
        }).join('')
        ublock.innerHTML=html
    })