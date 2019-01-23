// var

// var name = "Tutku Ince";
// var name = "Utku Ince";
// console.log(name);

// name = "Tutku";
// console.log(name);
// We can declare 2 var with same names with 'var'


// let

// let name = "Tutku";
// let name = "Utku";
// console.log(name);

// app004.js:12 Uncaught SyntaxError:
// Identifier 'name' has already been declared

let a,b;
a = 10;
b = 20;
console.log(a + b);


// const -> constant
const name = "Tutku";
console.log(name);

// name = "Utku";
// app004.js:31 Uncaught TypeError: Assignment to constant variable.
// at app004.js:31

// const a;
// a = 10;
// console.log(a);
// Uncaught SyntaxError: Missing initializer in const declaration

const nums = [1, 2, 3, 4, 5];
console.log(nums);

// nums points same pointer.
// if it points different pointer it will throw an error
nums.push(6);
console.log(nums);