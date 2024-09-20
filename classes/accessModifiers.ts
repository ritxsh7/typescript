
/* Ts provides 3 access modifiers 

    1. public => accessible to every one and all objects
    2. private => accessible within the same class
    3. protected => accessible to same class and children

    => unlike other oop languages like c++, java, access limiting in ts is done at compile time only and not runtime

*/

// 1. private

class Student{
    
    // private keyword 
    private rollNo: number;
     firstName : string;
    lastName: string;
    protected branch: string;

    //constructor
    constructor(rollNo:number, firstName : string, lastName: string) {
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = () : void => {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let student = new Student(1, "Ritesh", "Patil");

console.log(student.firstName); //public member can be accessed
// console.log(student.rollNo); error



// Inheritance
class BranchStudent extends Student{
    constructor(rollNo: number, firstName: string, lastName: string, branch:string) {
        super(rollNo, firstName, lastName);
        this.branch = branch;
    }

    getBranch = () => {
        console.log(this.branch);
    }
}

let cse = new BranchStudent(1, "Ritesh", "Patil", "CSE");

cse.getFullName(); //inherited methods
cse.getBranch(); //own methods

