/*
    1. blur trên input email.
*/

function Validator(options){
    function getParentElement(inputElement, selector){
        while(inputElement.parentElement){
            if(inputElement.parentElement.matches(selector)){
                return inputElement.parentElement
            }
            inputElement = inputElement.parentElement;
        }
    }
    var selectorRules ={};
    // hàm validate 
    function validate (inputElement, rule){
        // var errorElement = getParentElement(inputElement,options.formGroupSelector)
        var errorElement =getParentElement(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        // lấy ra các rule của selector 
        var rules = selectorRules[rule.selector]
        // lặp qua từng rule và check validate 
        // nếu có lỗi thì dừng check 
        for(var i = 0;i<rules.length;i++){
            switch(inputElement.type){
                case 'checkbox':
                case 'radio':
                    errorMessage= rules[i](formELement.querySelector(rule.selector+':checked'))
                    break;
                default:
                    errorMessage= rules[i](inputElement.value)
            }
            if(errorMessage) break;
        }
        if(errorMessage){
            errorElement.innerText=errorMessage
            getParentElement(inputElement,options.formGroupSelector).classList.add('invalid')
        }else{
            errorElement.innerText=''
            getParentElement(inputElement,options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage;
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
            if(isFormValid){
                if(typeof options.onSubmit==='function'){
                    var enableInputs = formELement.querySelectorAll('[name]:not([disable])')
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'radio':
                                values[input.name]=formELement.querySelector('input[name="'+input.name+'"]:checked').value
                                break;
                            case 'checkbox':
                                if(!input.matches(":checked")) return values;
                                if(!Array.isArray(values[input.name])){
                                    values[input.name]=[]
                                }
                                values[input.name].push(input.value)
                                break;
                            default:
                                 values[input.name]=input.value
                        }
                        return values
                    },{})
                    options.onSubmit(formValues)
                }
            }else{
                console.log("co loi" )
            }
           
        }
        // lặp qua mỗi rule và xử l
        options.rules.forEach(function(rule){
            // lưu lại các rule cho mỗi input 
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector]= [rule.test];
            }
            var inputElements = formELement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement){
                if(inputElement){
                    // blur vào input 
                    inputElement.onblur = function(){
                       validate(inputElement,rule)
                    }
                    // xử lí mỗi khi người dùng nhập 
                    inputElement.oninput= function(){
                        var errorElement =getParentElement(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText='';
                        getParentElement(inputElement,options.formGroupSelector).classList.remove('invalid');
                    }
                    inputElement.onchange= function(){
                        var errorElement =getParentElement(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText='';
                        getParentElement(inputElement,options.formGroupSelector).classList.remove('invalid');
                    }
                }
            })
            
        });
       
    }

}

// 1. khi error tra ra message loi 
// 2. Khi hop le khong tra ra cai gi ca
Validator.isRequired= function(selector, message){
    return {
        selector:selector,
        test:function(value){
            return value ?  undefined:message||'Vui lòng nhập trường này !'
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
            return value.length>=min ? undefined:message||`Vui lòng nhập vào tối thiểu ${min} kí tự`
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
