//lấy ra thuộc tính object lòng nhau

const obj ={
    name:'Alice',
    cat:{
        name:'Dias1',
        cat2:{
            name:'Dias2',
            cat3:{
                name:'Dias3'
            }
        }
    }
}
if (obj.cat)
    console.log(obj.cat.name)

    //  sử dụng optional chaining 
if(
    obj?.cat?.cat2?.cat3// kiểm tra  những key nào không chắc chắn tồn tại có trong obj
     // kiểm tra xem cat có tồn tại hay kkhoong // check cat2 có tồn tại hay không // check cat3 có tồn tại hay khoog 
){
    console.log(obj.cat.cat2.cat3.name)
}

