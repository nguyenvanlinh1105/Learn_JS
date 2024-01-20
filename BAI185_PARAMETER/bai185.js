// default parameter : định nghĩa tham số mặc đinh j 
function logger(log){
    if(typeof log ==='undefined'){
        log='gia tri mac dinh'}
    console.log(log)
}

// logger("Linh nguyên x")
function defaultValue(log ='Gia tri mac dinh neu khong truyen vao'){
    console.log(log)
}
logger()
defaultValue("linh Nguyen")


function likeAlert (log, isAlert=false){
    if(isAlert)
        alert(log)
    console.log(log)
}

likeAlert("Linh nguyen thich alert",true)