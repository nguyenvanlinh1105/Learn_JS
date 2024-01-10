
// toán  tử ba ngoi 



var courses={
    name :'Java script',
    coin : 305
}

if (courses.coin>50){
    console.log(`${courses.coin}$`)
}


//  / thay bằng toán tử 3 ngôi 
coin = 32
var result = coin >50? "freee": "mất tiền "
console.log(result)



// Làm bài

function getCanVoteMessage(age){
    var result= age>=18? 'Bạn có thể bỏ phiếu': 'Bạn chưa được bỏ phiếu'
    return result
}


// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'


