function Validator(formSelector, options){
    if(!options){
        options={}
    }
    function getParent (element , selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        
        }
    }
    var formRules ={}

    /*
        1. Nếu có lỗi thì return message lỗi 
        2. không có lỗi thì return undefined
    */

    var ValidatorRules ={
        required : function(value){
            return value? undefined:'Vui lòng nhập trường này !'
        },
        email : function(value){
            var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value)? undefined:'Trường này phải là email !'
        },
        min : function(min){
            return function(value){
                return value.trim().length >=min ? undefined:`Vui lòng nhập tối thiểu ${min} kí tự`
            }
        }
    }
    var formElement = document.querySelector(formSelector)
    if(formElement){
        var inputs = formElement.querySelectorAll('[name][rules]')
        for(var input of inputs){
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules){
                var ruleInfo;
                var isRuleHasValue =rule.includes(':');
                if(isRuleHasValue){
                    ruleInfo = rule.split(":");
                    rule = ruleInfo[0];
                }
                var ruleFunc = ValidatorRules[rule]
                if(isRuleHasValue){
                    ruleFunc= ruleFunc(ruleInfo[1])
                }
                
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                }else{
                    formRules[input.name]=[ruleFunc]
                }
            }

            // lắng nghe sự kiện để validate blur , change,...
            input.onblur = handleValidate;
            input.oninput = handleClearError;

            
        }
        function handleValidate (event){
            var rules = formRules[event.target.name];
            var errorMessage;
            for(var rule of rules){
                errorMessage = rule(event.target.value)
                if(errorMessage){
                    break;
                }
            }
            if(errorMessage){
                var formGroup = getParent(event.target,'.form-group');
                if(formGroup){
                    var formMessage = formGroup.querySelector('.form-message')
                    if(formMessage){
                        formMessage.innerText=errorMessage;
                        formGroup.classList.add('invalid')
                    }
                }
            }
            return !errorMessage;
        }

        function handleClearError(event){
            var formGroup = getParent(event.target,'.form-group');
            if(formGroup.classList.contains('invalid')){
                var formMessage = formGroup.querySelector('.form-message')
                if(formMessage){
                    formMessage.innerText='';
                    formGroup.classList.remove('invalid')
                }
            }
        }

        console.log(formRules)
    }
    // xử lí hành vi submit form 

    formElement.onsubmit= function(event){
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]')
        var isValid=true;
        for(var input of inputs){
            if(!handleValidate({target:input})){
                isValid =false;
           }
            
        }
        this.onSubmit = function (){

        }
        if(isValid){
          if(typeof options.onSubmit ==='function'){
            return options.onSubmit();
          }else{
            formElement.submit()
          }
        }
    }

}