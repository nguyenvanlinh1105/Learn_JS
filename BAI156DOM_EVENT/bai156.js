// DOM EVENT 
// 1.INPUT/ SELECT
// 2. KEY UP // DOWN 
var input1Element = document.querySelector('input[type="text"]')

// ON CHANGE : khi thay đổi và blur ra ngoài 
// input1Element.onchange = function(e){
//     console.log(e.target.value)
// }

// ON INPUT : Khi vừa nhấp và ô input để thực hiện thao tác thì nó sẽ thực thi luôn 
// var inputValues;
// input1Element.oninput = function(e){
//     inputValues=e.target.value
// }
//console.log(inputValues)// vào console.log() mà gõ để kiểm tra 

// ON KEYDOWN : nhấn 1 phát xuống mới ăn được sự kiện nên là chậm đi 1 kí tự 
// input1Element.onkeydown = function(e){
//     console.log(e.target.value)
// }
    // ON KEYUP : nhấc phím lên thì nó mới ăn sự kiện
input1Element.onkeyup = function(e){
    console.log(e.which)
    switch(e.which){
        case 27:{
            console.log('exit')
            break;
        }
    }
}
// ON CHECKBOX
var input2Element = document.querySelector('input[type=checkbox]')
input2Element.onchange = function(e){
    console.log(e.target.checked)
}



// SELECT ON CHANGE 
var selectElement = document.querySelector('select')
selectElement.onchange=function(e){
    console.log(e.target.value)
}

