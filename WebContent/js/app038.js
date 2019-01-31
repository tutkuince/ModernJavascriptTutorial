// Syntactic Sugar

//
// ECMAScript 5
//
// function Employe(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
//
// Employe.prototype.showInfos = function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
// }
//
// const emp = new Employe("Tutku", 30, 4000);


//
// ECMAScript 6
//
class Employee {

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }

}

const emp = new Employee("Tutku", 30, 4000);
console.log(emp);