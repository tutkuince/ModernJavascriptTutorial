// Variables

// Primitive Types
var a = 10; // Number
var b = 3.14;
console.log(typeof a);  // type of a
console.log(typeof b);

// String
var name = "Tutku";
console.log(name);
console.log(typeof name);

// boolean
var bool = true;
console.log(bool);
console.log(typeof bool);

var n = null;
console.log(n);
console.log(typeof n);  // n is an object

// Undefined
var un;
console.log(un);
console.log(typeof un);

// Reference Types
var numbers = [1, 1, 2, 5, 7];
console.log(numbers);
console.log(typeof numbers);

var person = {
    name: "Tutku",
    surname: "Ince"
}

console.log(person);
console.log(typeof  person);

var date = new Date();
console.log(date);
console.log(typeof  date);

var hello = function () {
    console.log("Hello!!!");
}

console.log(hello);
console.log(typeof hello);

console.clear();

// Primitive Types vs Reference Types

// Primitive Types Sample
var n1 = 10;
var n2 = n1;

console.log(n1, n2);

n1 = 20;
console.log(n1, n2);

console.clear();

// Reference Types Sample

var a1 = [1, 2, 3];
var a2 = a1;

console.log(a1, a2);

a1.push(4);

console.log(a1, a2);