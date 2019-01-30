// const obj = {
//     test1: function () {
//         console.log("Test 1");
//     },
//     test2: function () {
//         console.log("Test 2");
//     }
// };
//
// const emp = Object.create(obj);
// console.log(emp);

function Person() {

}
Person.prototype.test1 = function () {
    console.log("Test 1");
}
Person.prototype.test2 = function () {
    console.log("Test 2");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);   // inheritance -> Employee extends Person

Employee.prototype.myTest = function () {
    console.log("My Test");
}

const emp1 = new Employee("Tutku", 10);
console.log(emp1);