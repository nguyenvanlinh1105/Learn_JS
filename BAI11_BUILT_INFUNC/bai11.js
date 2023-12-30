/*
Một só hàm built -in
    1. Alert
    2. Console.: in ra dòng thông báo ở console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

// Console
 console.log("Day la dong log")
 var fullName = 'Linh nguyen';
 console.log(fullName)

// Confirm : chỉ hiện ra thông báo và ok && cancel

confirm('Xac nhan ban du 18 tuoi')

// Prompt : hiện ra thông báo và input nhập vào  && ok & cancle

prompt ("Xac nhan tuoi cua ban")


// set timeout: chỉ chạy một lần duy nhất sau thời gian ấn định
setTimeout(function(){
    alert ('Linh Nguyen')
}, 1000)


// setInterval: chạy nhiều lần, lặp đi lặp lại sau thời gian ấn định
setInterval(function(){
    console.log("Linh Nguyen "+Math.floor(Math.random(1000,1)))
},2000)

