const person = {
    name: "Tutku Ince",
    age: 30,
    salary: 4000
};

const langs = ["Java", "Python", "C++", "Javascript"];
const name = "Tutku";

//
// For In
//

//Object
// for (let prop in person){
//     console.log(prop, person[prop]);
// }

// Array
// for (let index in langs){
//     console.log(index, langs[index]);
// }

// String
// for (let index in name){
//     console.log(index, name[index]);
// }


//
// For Of -> not on objects
//

// Object
// for (let value of person){  // Uncaught TypeError: person is not iterable
//     console.log(value);
// }

// Array
// for (let value of langs){
//     console.log(value);
// }

// String
for (let char of name){
    console.log(char);
}