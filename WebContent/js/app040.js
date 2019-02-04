// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
// }
//
// // const person = new Person("Tutku", 30);
// // console.log(person);
//
// function Employee(name, age, salary) {
//     // this.name = name;
//     // this.age = age;
//     Person.call(this, name, age);
//     this.salary = salary;
// }
//
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//     console.log("Employee");
// }
// // Override showInfos()
// Employee.prototype.showInfos = function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
// }
//
// const emp = new Employee("Tutku", 30, 4000);
// console.log(emp);
// emp.showInfos();
// emp.toString();

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Employee extends Person {

    constructor(name, age, salary){
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary;
    }

    // @Override
    showInfos () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}

const emp = new Employee("Tutku", 30, 4000);
console.log(emp);
emp.showInfos();