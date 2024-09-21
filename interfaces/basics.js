function operateStudent(student) {
    // student.rollNo = 23; error as rollNo is readonly
    if (student.middleName)
        console.log(student.firstName + " " + student.middleName + " " + student.lastName);
    else
        console.log(student.firstName + " " + student.lastName);
}
var student = {
    rollNo: 23,
    firstName: 'Ritesh',
    middleName: 'JN',
    lastName: 'Patil'
};
operateStudent(student);
