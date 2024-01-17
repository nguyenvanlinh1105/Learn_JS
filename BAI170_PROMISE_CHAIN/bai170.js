// PROMISE CHAIN 

var promise = new Promise(
    function(resolve, reject){
        resolve([
            {
                id: 1,
                name:'javascript'
            },
            {
                id: 2,
                name:'Python'
            }
        ])
    }
)

promise
    .then(function(courses){
        console.log(courses)
        return 1// return trên này thì thằng ở dưới nó sẽ nhận hết 
    })
    .then(function(data){
       // nếu hàm này không return ra một promise thì lập tức nó sẽ chạy thằng phía dưới
       return new Promise (function(resolve){
            setTimeout(() => {
                resolve(data)
            }, 3000);
       })
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(){

    })
    .finally(function(){

    })