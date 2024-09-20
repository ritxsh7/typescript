/* Ts provides 3 access modifiers

    1. public => accessible to every one and all objects
    2. private => accessible within the same class
    3. protected => accessible to same class and children

    => unlike other oop languages like c++, java, access limiting in ts is done at compile time only and not runtime

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. private
var Student = /** @class */ (function () {
    //constructor
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
console.log(student.firstName); //public member can be accessed
// console.log(student.rollNo); error
// Inheritance
var BranchStudent = /** @class */ (function (_super) {
    __extends(BranchStudent, _super);
    function BranchStudent(rollNo, firstName, lastName, branch) {
        var _this = _super.call(this, rollNo, firstName, lastName) || this;
        _this.getBranch = function () {
            console.log(_this.branch);
        };
        _this.branch = branch;
        return _this;
    }
    return BranchStudent;
}(Student));
var cse = new BranchStudent(1, "Ritesh", "Patil", "CSE");
cse.getFullName(); //inherited methods
cse.getBranch(); //own methods
