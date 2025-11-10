"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }
    Student.prototype.getAverage = function () {
        var total = this.marks.reduce(function (a, b) { return a + b; }, 0);
        return total / this.marks.length;
    };
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Roll No: ".concat(this.rollNo));
        console.log("Average Marks: ".concat(this.getAverage().toFixed(2)));
        console.log('------------------------');
    };
    return Student;
}());
exports.Student = Student;
