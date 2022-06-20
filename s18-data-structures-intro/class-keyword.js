// by convention, class names start with a capital letter

// Hoisting =>
// all variable and function declarations are lifted to the top of the page
// var declarations will have null values
// let and const only mark that something will exist
// if inside our code we call one function that has not been defined or a non initialized variable we will
// either get an error bcs of tryin to execure null or directly an error thrown bcs it s still expecting an
// INITIALAZATION after the hoisting process
class Student {
    constructor(firstName, lastName, year = 1) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }
    markLate() {
        this.tardies++;
        return this.fullName() + ` has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        return Math.round(
            this.scores.reduce(
                (prevVal, currentVal) => prevVal + currentVal,
                0
            ) / this.scores.length
        );
    }

    // static methods are general function that are not specific to a current instance
    // they are class level methods
    // They are mostly used as utility functions for our interface
    static enrollStudents() {
        return null;
    }
}
// Classes are like blueprints
// When we instantiate a new instance of the Student class with the
// new keyword, a blank object is createed that has linked to it the this keyword
// All the funcitonallity defined for that data can be accessed by all instances of the class
// and it s common for all elements; it can be accesed through the _proto_ chain that every instance gets linked to
// in the creatin process

const firstStudent = new Student("Stanea", "Bogdan");
console.log(firstStudent);
console.log(firstStudent.firstName);
console.log(firstStudent.fullName());
console.table(firstStudent);

console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

firstStudent.addScore(87);
firstStudent.addScore(93);
console.log(firstStudent.calculateAverage());
