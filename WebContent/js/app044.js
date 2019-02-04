//
// setTimeout
//
// setTimeout(function () {
//     console.log("Hi!");
// }, 2000);

//
// setInterval
//
let i = 0;
let value = setInterval(function () {
    console.log(i);
    i++;
}, 1000);

//
// Clear Interval
//
document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
});