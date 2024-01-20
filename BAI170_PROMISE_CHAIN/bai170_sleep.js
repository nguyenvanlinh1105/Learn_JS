function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },1000)
    })
}


sleep(500)
    .then(function(){
        console.log(1)
        return sleep(500)
    })
    .then(function(){
        console.log(1)
        return sleep(500)
    })
    .then(function(){
        console.log(1)
        return sleep(500)
    })
    .then(function(){
        console.log(1)
        return sleep(500)
    })