// PROMISE: 

// sync: đồng bộ 
// async: bất đồng bộ:setTimeout/ setInterval, fetch, XMLHttpsRequest, file reading, request animation frame 
// Lý thuyết, cách hoạt động
// thực hành, ví dụ
//callback


setTimeout(function(){
    console.log(1)
},1000)
console.log(2)
setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') 