// ==
console.log(2 == "2");  // true

// ===
console.log(2 === "2"); // false

// !==
console.log(2 !== "2"); // true


const error = true;

if (error) {
    console.log("Error");
} else {
    console.log("No Error");
}

// Ternary Operators

const number = 100;

console.log(number === 100 ? "Number is 100" : "Number is not 100");

// Switch

const process = 2;

switch (process) {
    case 1:
        console.log("Process is 1");
        break;
    case 2:
        console.log("Process is 2");
        break;
    default:
        console.log("Default value");
        break;
}