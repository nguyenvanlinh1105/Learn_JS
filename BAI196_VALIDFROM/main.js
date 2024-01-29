/*
    1. blur trên input email.
*/

function Validator(options){
    // hàm validate 
    function validate (element, rule){
        var errorElement =element.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(element.value)
        if(errorMessage){
            errorElement.innerText=errorMessage
            element.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText=''
            element.parentElement.classList.remove('invalid')

        }
    }
    // lấy element của form cần validate 
    var formELement = document.querySelector(options.form);
    if(formELement){
        options.rules.forEach(function(rule){
            var inputElement = formELement.querySelector(rule.selector);
            var errorElement =inputElement.parentElement.querySelector('.form-message');
            if(inputElement){
                // blur vào input 
                inputElement.onblur = function(){
                   validate(inputElement,rule)
                }
                // xử lí mỗi khi người dùng nhập 
                inputElement.oninput= function(){
                    errorElement.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}
// 1. khi error tra ra message loi 
// 2. Khi hop le khong tra ra cai gi ca
Validator.isRequired= function(selector){
    return {
        selector:selector,
        test:function(value){
            return value.trim() ? undefined:'Vui lòng nhập trường này !'
        }
    }    
}

Validator.isEmail = function(selector){
    return {
        selector:selector,
        test:function(value){
            var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value)? undefined:'Trường này phải là email !'
        }
    }
}