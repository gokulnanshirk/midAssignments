class Calculator {
    constructor(a,b){
        
        this.add(a,b)
        this.sub(a,b)
        this.mul(a,b)
        this.div(a,b)
    }

    add(a,b){
        console.log("Addition is :",a+b) 
    }
    sub(a,b){
        console.log("subtraction is :",a-b) 
    }
    mul(a,b){
        console.log("Multiplication is :",a*b) 
    }
    div(a,b){
        console.log("Division is :",a/b) 
    }

}

let res=new Calculator(1,2)
