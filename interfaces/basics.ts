interface Student{
    readonly rollNo: number; //readonly prop can't be changed
    firstName: string;
    lastName: string;
    middleName?: string;  //optional type
}

function operateStudent(student: Student) {
    // student.rollNo = 23; error as rollNo is readonly
    
    if (student.middleName)
        console.log(student.firstName + " " + student.middleName + " " + student.lastName);
    else
        console.log(student.firstName + " " + student.lastName);
}

let student:Student = {
    rollNo: 23,
    firstName: 'Ritesh',
    // middleName : 'JN',
    lastName : 'Patil'
}

operateStudent(student);