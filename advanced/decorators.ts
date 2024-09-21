

//decorator
function Logger(constructor: Function):void {
    console.log("Logger decorator called on "+ constructor);
    
}


//plain class
@Logger
class Employee{
    name: string = "Ritesh";
    age: number = 20;

    constructor() {
        console.log(
            "Constructor invoked"
        );
    }
}

let emp = new Employee();