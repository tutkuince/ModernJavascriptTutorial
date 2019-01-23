// Definition

function sayHi() {
    console.log("Hello World!");
}
sayHi();    // invoke sayHi()

// default value of name is "No Name"
// default value of surname is "No Surname"
function sayMyName(name = "No Name", surname = "No Surname") {
    // if(typeof name === "undefined")
    //     name = "No Name";
    //
    // if(typeof surname === "undefined")
    //     surname = "No Surname";

    console.log(`${name} ${surname}`);
}
sayMyName("Tutku", "Ince");

sayMyName();    // No Name No Surname
sayMyName("Tutku"); // // Tutku No Surname


function square(num) {
    return Math.pow(num, 2);
}

function cube(num) {
    return Math.pow(num, 3);
}

let a = cube(square(2));
console.log(a);



const sayHello = function (name) {
    console.log(`Hello ${name}`);
}
sayHello("Tutku");


//
//  Immediately Invoked Function Expression (IIFE)
//
(function (name) {
    console.log(`Say Hi IIFE to ${name}`);
})("Tutku");



const database = {
    host: "localhost",
    add: function () {
        console.log("Added");
    },
    get: function () {
        console.log("Get");
    },
    update: function (id) {
        console.log(`Id: ${id} updated`);
    },
    delete: function (id) {
        console.log(`Id: ${id} deleted`);
    }
}

console.log(`host: ${database.host}`);
database.add();
database.get();
database.update(1);
database.delete(1);
