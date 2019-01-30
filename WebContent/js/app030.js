// Map -> Key,Value
// let myMap = new Map();

// console.log(myMap);
// console.log(typeof myMap);

// const key1 = "Tutku";
// const key2 = {
//     a: 10,
//     b: 20
// };
// const key3 = () => 2;
//
// // Set
// myMap.set(key1, "String");
// myMap.set(key2, "Object Literal");
// myMap.set(key3, "Function Value");
//
// // Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
//
// // Size
// console.log(myMap.size);


const cities = new Map();
cities.set("Izmir", 35);
cities.set("Istanbul", 34);
cities.set("Ankara", 6);

// cities.forEach((value, key) => console.log(value, key));
// for (let [key, value] of cities){   // Destructing
//     console.log(key, value);
// }

//
// Map Keys
//
// for (let key of cities.keys()){
//     console.log(key);
// }

//
// Map Values
//
// for (let value of cities.values()){
//     console.log(value);
// }

//
// Array to Map
//
// const array = [["key1", "value1"], ["key2", "value2"]];
// const lastMap = new Map(array);
// console.log(lastMap);


//
// Map to Array
//
const array = Array.from(cities);
// [["Izmir", 35], ["Istanbul", 34], ["Ankara", 6]]
console.log(array);