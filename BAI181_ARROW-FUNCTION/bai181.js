//arrow function 
var logger = (log)=>{
    console.log(log)
}

logger("linh")


var sum =(a, b)=> a+b// return 1 dòng thì có thể bỏ ngoạc và retunrn
console.log(sum(4,5))

const sum=(a,b)=>({a:a,b:b})

//  arrow function không hỗ trọ context , không thể tạo được contruct tor
// function basic thì hỗ trợ context  hay this. 

const courses ={
    name:"Java",
    getname: ()=>{
        return this.name// không thể xài như này vì không hỗ trọ context
    }
}

function User(a, b){
    this.a= a;
    this.b=b
}
var constr = (a,b){
    this.a = a;
    this.b=b// không thể tạo ra 
}