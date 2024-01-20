// classes là một cách viết khác của constructor funciotn 

function Course(name, price){
    this.name = name;
    this.price= price;
    this.getName=function(){
        return this.name
    }
}

var java = Course("Java", 300)

class User {
    constructor(name, desc){
        this.name= name ;
        this.desc = desc;
    }
    getName(){
        return this.name 
    }
    run(){
        const isSuccess = false ;
        if(true){
            isSuccess=true;
        }
    }
}