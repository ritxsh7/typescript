var Student = /** @class */ (function () {
    function Student(rollNo, firstName, lastName) {
        var _this = this;
        this.getFullName = function () {
            console.log("".concat(_this.firstName, " ").concat(_this.lastName));
        };
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Student;
}());
var student = new Student(1, "Ritesh", "Patil");
student.getFullName();
