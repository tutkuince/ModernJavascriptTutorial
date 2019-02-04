// Callback Functions

// const langs = ["Java", "Python", "C++"];
// langs.forEach(lang => console.log(lang));

// document.getElementById("btn").addEventListener("click", function () {
//     console.log("Click");
// });


// function process1(callback) {
//     // console.log("Process 1");
//     setTimeout(function () {
//         console.log("Process 1");
//         callback(); // run after process1()
//     }, 3000);
// }
//
// function process2() {
//     setTimeout(function () {
//       console.log("Process 2");
//     }, 2000);
// }
//
// process1(process2);   // process2() => callback
// process2();
// console.log("Hi!");

const langs = ["Java", "Python", "C++"];

function addLang(lang, callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("New language has been added!");
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(lang => console.log(lang));
    }, 1000);
}

addLang("Javascript", getAllLangs);
// getAllLangs();  // asynchronous state