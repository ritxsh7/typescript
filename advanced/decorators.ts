

//decorator
function Logger(target: Function):void {
    // target variable access the class
    console.log(target);    
}

//plain class
@Logger
class Employee{
    name: string = "Ritesh";
    age: number = 20;

    constructor() {
        console.log("Constructor invoked");
    }
    
}

let emp = new Employee();