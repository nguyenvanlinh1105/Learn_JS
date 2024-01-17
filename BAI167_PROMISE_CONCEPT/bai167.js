// đây là obj constructor 
// các bước thực hiện: 1. new Promise
                        // 2. Executor: phải gọi 1 trong hai re.. nếu không thì sẽ bị memory leak

 //  có 3 trạng thái của promise
    //- Pending: đang chờ sự kiện thành công hay thất bại                        
    // - Fullfilled: thành công
    // - rejected : thất bại  
    //=> chỉ thực hiện 1 trong 2 
var promise = new Promise(
    function(resolve, reject){
        // logic xử lí 
        // thành công : resolve(), 
        // callAPI tra về một cái gì đỏ thì thằng then sẽ nhận được 
        resolve([
            {
                id : 1,
                name:'javascript'
            }
        ])
        // thất bai : reject()// tương tự reject 
        reject()
    }
)


promise // trả về 3 phương thức
    .then(function(course){// thành công thì gọi cái này 
        console.log(course)
    })
    .catch(function(){
        console.log("Error")
    })
    .finally(function(){
        console.log("Finally")
    });


    //  promise: - xử lí bất đồng bộ ES6.
                // - trước khi có promise thì mình thường sử dụng callback -> dẫn đến callback hell 
                // - code không bị xâu vào 
                // - khởi tạo với từ khóa new promise và truyền vào excute function , thành công: resolve, thất bại : reject 
