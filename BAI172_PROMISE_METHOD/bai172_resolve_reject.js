// promise.resolve
// promise.reject 
// promise.all

var promise = new Promise(
    function(resolve, reject){
        resolve('Success!')
    }
)

promise
    .then(function(message){
        console.log(message)
    })
    .catch(function(){
        console.log(message)
    })

    var prm= Promise.resolve("Success")// xác định là luôn thành công không có thất bại

    //var prms = Promise.reject("Error")// xác định là luôn thật bại 


    // chạy song song , sử dụng kết hợp dữ liệu 2 phần là res và rej

    var prm1 = new Promise(
        function(resolve){
            setTimeout(function(){
                resolve([1])
            },2000)
        }
    )
    var prm2= new Promise(function(resolve){
        setTimeout(function(){
            resolve([2,3])
        },5000)
    })
    // nếu làm nối đuôi thì mất 7s nếu làm kết hợp all thì mất 5s

Promise.all([prm1, prm2])
        .then(function(result){
            var result1= result[0]
            var result2= result[1]
            console.log(result1.concat(result2))
        })
        // .then(function(result1, result2){
        //     console.log(result1.concat(result2))
        // }) hoặc là như thế này 