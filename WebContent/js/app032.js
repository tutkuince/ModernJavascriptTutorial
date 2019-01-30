const mySet = new Set();
mySet.add(100);
mySet.add(100); // No addition
mySet.add("Tutku");
mySet.add(3.14);
mySet.add(true);
mySet.add({a:1, b:2});
mySet.add([1, 2, 3]);

// const mySet2 = new Set([100, 3.14, "Tutku"]);

// console.log(mySet);
// console.log(mySet2);

// Size
// console.log(mySet.size);

// Delete()
// mySet.delete(true);
// console.log(mySet);

// Has()
// console.log(mySet.has("Tutku"));
// console.log(mySet.has("200"));
// console.log(mySet.has([1, 2, 3]));  // false


// forEach
// mySet.forEach(v => console.log(v));

// for of
// for (let value of mySet){
//     console.log(value);
// }

const array = Array.from(mySet);
console.log(array);