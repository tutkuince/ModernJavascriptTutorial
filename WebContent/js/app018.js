let value;

//
// Select element with id
//
// value = document.getElementById("title-h1");


//
// Select element with class
//
// value = document.getElementsByClassName("paragraph-p"); // HTMLCollection


//
// Select element with tag name
//
// value = document.getElementsByTagName("h1");


//
// Query Selector -> Return 1 element (first element)
//

value = document.querySelector("#title-h1");
value = document.querySelector(".paragraph-p");
value = document.querySelector("p");


//
// Query Selector All -> Return all elements
//
value = document.querySelectorAll("p");

// value.forEach(e => console.log(e));


console.log(value);