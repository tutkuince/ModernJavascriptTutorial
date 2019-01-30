// let num1, num2;

// arr = [100, 200, 300, 400];

// num1 = arr[0];
// num2 = arr[1];

//
// Destructing
//
// [num1, num2] = arr;
// const [num1, num2] = arr;

// console.log(num1, num2);    // 100 200


//
// Object Destructing
//
// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };
//
// // const {num1, num2, num3} = numbers;
// // const {a, c, e} = numbers;
// const {a:num1, c:num2, e:num3} = numbers;
//
// // console.log(a, c, e);
// console.log(num1, num2, num3);


//
// Function Destructing
//
// const getLangs = () => ["Python", "Java", "C++"];
//
// const [lang1, lang2, lang3] = getLangs();
//
// console.log(lang1, lang2, lang3);



const person = {
    name: "Tutku Ince",
    year: "1989",
    salary: 4000,
    showInfos: () => console.log("Infos are showing. . . ")
};

const {name:fullName, year:birthDate, salary, showInfos} = person;
console.log(fullName, birthDate, salary);
showInfos();