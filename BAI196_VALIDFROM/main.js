/*
    1. blur trên input email.
*/

function Validator(options){

    var selectorRules ={};
    // hàm validate 
    function validate (inputElement, rule){
        var errorElement =inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;
        // lấy ra các rule của selector 
        var rules = selectorRules[rule.selector]
        // lặp qua từng rule và check validate 
        // nếu có lỗi thì dừng check 
        for(var i = 0;i<rules.length;i++){
            errorMessage= rules[i](inputElement.value)
            if(errorMessage) break;
        }
        if(errorMessage){
            errorElement.innerText=errorMessage
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText=''
            inputElement.parentElement.classList.remove('invalid')
        }
        return !!errorMessage;
    }
    // lấy element của form cần validate 
    var formELement = document.querySelector(options.form);
    if(formELement){
        formELement.onsubmit= function(e){
            e.preventDefault(); // bỏ đi hành vi mặc định submit form 
            var isFormValid = true;
            options.rules.forEach(function(rule){
                //lặp qua từng rule và validate 
                var inputElement = formELement.querySelector(rule.selector);
                var isValid=validate(inputElement,rule)
                if(!isValid){
                   isFormValid= false;
                }
            })

        }
        // lặp qua mỗi rule và xử l
        options.rules.forEach(function(rule){
            // lưu lại các rule cho mỗi input 
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector]= [rule.test];
            }
            var inputElement = formELement.querySelector(rule.selector);
            var errorElement =inputElement.parentElement.querySelector(options.errorSelector);
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
        });
       
    }

}

// 1. khi error tra ra message loi 
// 2. Khi hop le khong tra ra cai gi ca
Validator.isRequired= function(selector, message){
    return {
        selector:selector,
        test:function(value){
            return value.trim() ?  undefined:message||'Vui lòng nhập trường này !'
        }
    }    
}

Validator.isEmail = function(selector, message){
    return {
        selector:selector,
        test:function(value){
            var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value)?  undefined:message||'Trường này phải là email !'
        }
    }
}

Validator.minLength= function(selector, min, message){
    return {
        selector:selector,
        test:function(value){
            return value.length>min ? undefined:message||`Vui lòng nhập vào tối thiểu ${min} kí tự`
        }
    }    
}
Validator.isConfirmed= function(selector, getComfirmValue, message){
    return {
        selector:selector,
        test:function(value){
            return value===getComfirmValue() ? undefined:message||`Giá trị nhập vào không chính xác !`
        }
    }    
}
