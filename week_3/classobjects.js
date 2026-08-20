"use strict";
class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
    study() {
        console.log(this.name + " is studying TypeScript.");
    }
}
let student1 = new Student("Pallavi", 20, "AIML");
student1.displayDetails();
student1.study();
