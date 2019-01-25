// Scopes

// Global Scope
var val1 = 10;
let val2 = 20;
const val3 = 30;

// function func() {
//     // Function Scope
//     var val1 = 40;
//     let val2 = 50;
//     const val3 = 60;
// }
// func();

if (true){
    // Block Scope
    var val1 = 40;  // var value will change 10 to 40.
    let val2 = 50;
    const val3 = 60;
    console.log(val1, val2, val3);
}
console.log(val1, val2, val3);