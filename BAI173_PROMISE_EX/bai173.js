//example 
// 

var users=[
    {
        id:1,
        name:'Linh Nguyễn',
    },
    {
        id:2,
        name:'Sơn Đặng'
    },
    {
        id:3,
        name:'Hòa Lê'
    }
]

// nơi luu trưc commentkokil
var comments = [
    {
        id:1,
        user_id:1,
        content:'Anh Sơn chưa ra video à'
    },
    {
        id:2,
        user_id:2,
        content:'Vừa ra xong e ơi'
    },
    {
        id:3,
        user_id:1,
        content:'Em cảm ơn anh'
    }
]

// 1. Lấy comment
// 2. Từ comment lấy ra user id 
// 3. từ user id lấy ra user tương ứng 
// fake API 
function getComment (){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    })
}

function getUserByIds(userIds){
    return new Promise(function(resolve){
        setTimeout(function(){
            var result = users.filter(function(user){
                return userIds.includes(user.id)
            })
            resolve(result)
        },1000)
    })
}


getComment()
    .then(function(comments){
        console.log(comments)
        var userIds = comments.map(comment => {
            return comment.user_id
        });
        return getUserByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments : comments
                }
               
            })
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block')
        var html=''
        data.comments.forEach(comment => {
             var user= data.users.find(function(user){
                return user.id=== comment.user_id
             })
             html+=`<li>${user.name}:${comment.content}</li>`
        });
        commentBlock.innerHTML=html
    })
