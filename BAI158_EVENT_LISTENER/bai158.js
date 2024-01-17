/*
    1. EventListener
    2. JSON
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best practices
    9. Mistakes
    10. Performance

    1. Xử lí nhiều việc khi 1 event xảy ra
    2. Lắng nghe/ hủy bỏ lắng nghe 


// EventListioner 

*/
var btn = document.getElementById('btn')
console.log(btn)

// 1. Xử lí nhiều việc khi 1 event xảy ra 
        /// CÁCH 1: DOM EVENT 
    btn.onclick = function(e){
        // Việc 1
        console.log('Việc 1')

        // Việc 2
        console.log('Việc 1')

        // Việc 3
        console.log('Việc 1')
    }

        // CÁCH 2: thêm nhiều listener được// và thực hiện theo thứ tự truyền từ trên xuống dưới 
    function viec1(){
            console.log("event2: "+Math.random()*10)
        }
    btn.addEventListener('click',function(){
        console.log("event1: "+Math.random()*10)
    })
    btn.addEventListener('click',viec1())
// 2. Lắng nghe/ hủy bỏ lắng nghe 
    // sau 3s không muốn lắng nghe nữa 
    setTimeout(function(){
        btn.onclick = function(){}
    },3000)


    // CÁCH 2 Hủy bỏ lắng nghe theo EventListener 
    setTimeout(() => {
        btn.removeEventListener('click',viec1())
    }, 3000);

