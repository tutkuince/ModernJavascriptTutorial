// const object = new Object();
// console.log(object);

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.showInfos = function () {
//         console.log("Infos are showing. . . ");
//     }
//
//     this.toString = function () {
//         console.log(`Full Name: ${this.name}, Age: ${this.age}`);
//     }
// }
// const emp1 = new Employee("Tutku Ince", 30);
// console.log(emp1);
// emp1.showInfos();
//
// emp1.toString();
// console.log(emp1.toString());

function Employee(name, age) {
    this.name = name;
    this.age = age;
    // this.showInfos = function () {
    //     console.log(`Name: ${this.name}, Age: ${this.age}`);
    // }
}
Employee.prototype.showInfos = function () {    // prototype method
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const emp1 = new Employee("Tutku Ince", 30);
const emp2 = new Employee("Emin Koklu", 29);

emp1.showInfos();

console.log(emp1);
console.log(emp2);