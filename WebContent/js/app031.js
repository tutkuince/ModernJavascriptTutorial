//
// Primitive Types
//
// let a = "Tutku";
// let b = "Tutku";
//
// if (a === b)
//     console.log("Equals");   EQUALS


//
// Reference Type
//
// let array1 = [1, 2, ,3, 4, 5];
// let array2 = [1, 2, ,3, 4, 5];
//
// if (array1 === array2){
//     console.log("Equals");   NOT EQUALS
// }

// const prs1 = {
//     name: "Tutku",
//     surname: "Ince"
// };
//
// const prs2 = {
//     name: "Tutku",
//     surname: "Ince"
// };
//
// if (prs1 === prs2){
//     console.log("Equals");   NOT EQUALS
// }


const cities = new Map();
const key = [1, 2, 3];
cities.set("Izmir", 35);
cities.set("Istanbul", 34);
// cities.set([1, 2, 3], "Array");
cities.set(key, "Array");

// console.log(cities.get([1, 2, 3])); // undefined
console.log(cities.get(key));