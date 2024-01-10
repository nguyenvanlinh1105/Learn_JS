
var array=['a', 'b', 'c', 'd', 'a', 'b', 'c']
console.log(new Set(array))

// đẹ quy tính giai thừa : nhận được điểm dừng 
        // phải có logic 
//loop -> cpu
// dequy -> ram / stack leak : tràn bộ nhớ stack
function giaiThua(n){
    if (n>0){
        return n* giaiThua(n-1);
    }else{
        return 1
    }
}
var result = giaiThua(5);
console.log(result)

function tinTong(n){
    if (n==0){
        return 0;
    }else{
        return n+tinTong(n-1)
    }
}

result = tinTong(10)
console.log(result)

function countDown(n){
    if(n>=0){
        console.log(n)
        return countDown(n-1)
    }else{
        return n
    }
}
countDown(10)
 console.log("loop")
function loop(st, end, cb){
    if(st<end){
        cb(st)
        loop(st+1,end,cb);
    }else{
        return ;
    }
}
var arr = ["linh",'hoa' , 'ahir']
loop(0, arr.length, function(index){
    console.log("index:"+index)
})


function git(n){
    var tong = 1;
    for(var i=1;i<=n;i++){
        tong*=i;
    }
    return tong

}
console.log(git(5))