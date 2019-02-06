// async function test(data) { // if function start with async, function returns Promise -> new Promise();
//     // return data; // same
//     return new Promise((resolve, reject) => {
//         resolve(data);
//     });
// }
//
// // console.log(test("Hello!"));
// test("Hello").then(response => console.log(response));


//
// Note: await is only valid in async function
//
// async function test(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This is a value");
//         }, 5000);
//     });
//
//     // promise resolve to response with resolve's value
//     let response = await promise;   // waits 5 seconds
//
//     // console.log(response);
//     // console.log("Hi!");
//
//     return response;
// }
//
// // test("Hello");
// test("Hello").then(response => console.log(response));

// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//        setTimeout(() => {
//            if (typeof data === "string")
//                resolve(data);
//            else
//                reject(new Error("Please enter a string value"));
//        },5000);
//     });
//
//     const response = await promise;
//
//     return response;
// }
//
// // testData("Tutku").then(data => console.log(data));
// testData(1)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

async function getCurrency(url) {
    const response = await fetch("https://api.exchangeratesapi.io/latest"); // Returns Response Object
    console.log(response);

    const data = await response.json();

    // console.log(data);
    return data;
}

// getCurrency("https://api.exchangeratesapi.io/latest");
getCurrency("https://api.exchangeratesapi.io/latest").then(response => console.log(response));