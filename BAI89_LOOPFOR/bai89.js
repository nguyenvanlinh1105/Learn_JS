/*
 for : lặp với điều kiện đúng 
 for/in: lặp qua các key của đối tượng 
 for/of: lặp qua value của đối tượng
 while():lặp khi điều kiện đúng
 do/while(): lặp ít nhất 1 lần sau đó lặp khi điều kiện đúng 



*/
// for
var i = 1;
for(i = 1;i<=10;i++){
    console.log("Toi là linh Nguyễn "+i)
}


// for /in: lấy ra các key 
var arr=["linh Nguyễn",'hòa lê','Thanh hiếu','Văn Nhân']
for( i in arr){
    console.log(i) // lấy ra các index 
} 

// for/of: lấy ra các value
for(i of arr){
    console.log(i)
}
console.log("lin nguyễn ở đây rồi")
// vòng lặp while()
var i  = 0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
// for /in 
var myString = "javascript"
var arr = myString.split('')
console.log(arr.join("/"))
console.log(arr)
for(var key in myString){
    console.log(myString[key])
}



// do / while
var isSuccess = false ;
var i = 0;
do{
    i++;
    console.log("Nạp thẻ lần thứ "+i);
    if (false){
        isSuccess = true
    }
}while(!isSuccess&& i<3)
