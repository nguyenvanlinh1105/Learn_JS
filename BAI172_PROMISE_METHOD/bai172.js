
// PROMISE Method

function sleep(ms){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve()
        }, ms);
    })
}
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
    .then(function(){
        console.log(2)
        return new Promise(function(resolve, reject){
            reject("có lỗi")
        })
    })
    .then(function(){
        console.log(3)
    })
    .catch(function(err){
        console.log(err)
    })







