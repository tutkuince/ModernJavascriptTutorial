// function getData(data) {    // Return Promise Object
//     return new Promise(function (resolve, reject) {
//        setTimeout(function () {
//
//            if (typeof data === "string") {  // positive
//                 resolve(data);
//            } else { // negative
//                // reject("Please enter a string value");
//                reject(new Error("Please enter a string value"));
//            }
//        }, 5000);
//     });
// }

// console.log(getData("Hi"));

// then
// getData("Hi").then(function (response) {
//    console.log(response);
// });

// catch
// getData("Hi").catch(function (err) {
//     console.log(err);
// });


// getData(2).then(function (response) {
//     console.log("Value: " + response);
// }).catch(function (err) {
//     // console.log("Value: " + err);
//     console.error("Value: " + err);
// });

// getData("Hello")
//     .then(response => console.log("Value: " + response))
//     .catch(err => console.error("Value: " + err));


function addTwo(number) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number")
                resolve(number + 2);
            else
                reject(new Error("Please enter a number"));
        }, 3000);
    }));
}

addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2;
    })
    .then(response2 => console.log(response2))
    .catch(err => console.log(err));    // 1 catch