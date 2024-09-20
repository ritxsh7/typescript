class Student{
    rollNo : number;
    firstName : string;
    lastName : string;

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
student.getFullName();
