let value;

//
//  Convert to String
//

// value = String(123);

// value = String(3.14);

// value = String(true);

// value = String(function () {
//     console.log();
// })

// value = String([1, 2, 3, 4, 5]);

// value = (10).toString();

// value = (3.14).toString();


//
//  Convert to Numbers
//

// value = Number("12345");

// value = Number(null);   // 0

// value = Number(undefined);   // NaN -> Not a number

// value = Number("Hello");     // NaN

// value = Number([1, 2, 3, 4, 5]);    // NaN

// value = Number(function () { // NaN
//     console.log();
// })

// value = Number(3.14);

// value = parseFloat("3.14");

// value = parseInt("123");     // 3.14

value = parseInt("3.14");   // 3


const a = "Hello " + 34;    // String
console.log(a);
console.log(typeof a);


console.log(value);
console.log(typeof value);
