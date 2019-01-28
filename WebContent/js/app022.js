// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");
//
// todoForm.addEventListener("submit", submitForm);
//
// function submitForm(e) {
//     console.log("Submit Event");
//
//     e.preventDefault(); // page is not reloading with this method
// }
//
// Focus
//
// filterInput.onfocus = function () {
//     console.log("Search Todo on focus!");
// }

// addEventListener // e -> event
// filterInput.addEventListener("focus", function (e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log("Search Todo on focus!");
// });


//                  Keyboard Events

//
// keypress
//
// document.addEventListener("keypress", run);
//
// function run(e) {
//     // console.log(e.which);   // ascii value
//     console.log(e.key); // words and numbers
// }


//
// keydown
//
// document.addEventListener("keydown", run);
// function run(e) {
//     // console.log(e.which);   // ascii value
//     console.log(e.key); // all with keydown
// }


//
// keyup
//
// document.addEventListener("keyup", run);
// function run(e) {
//     // console.log(e.which);   // ascii value
//     console.log(e.key); // all with keydown
// }



// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");
//
// todoInput.addEventListener("keyup", change);
//
// function change(e) {
//     header.textContent = e.target.value;
//     console.log(e.target.value);
// }



//              MOUSE EVENTS
// const cardBody = document.querySelectorAll(".card-body")[0];
// const title = document.querySelector("#tasks-title");
//
// // title.addEventListener("click", run);
// title.addEventListener("dblclick", run); // double click
//
// function run(e) {
//     console.log(e.type);
// }


//
//  Mouse Down
//
// title.addEventListener("mousedown", run);
//
// function run(e) {
//     console.log(e.type);
// }

//
//  Mouse Down
//
// title.addEventListener("mouseup", run);
//
// function run(e) {
//     console.log(e.type);
// }

//
//  Mouse Over
//
// title.addEventListener("mouseover", run);
//
// function run(e) {
//     console.log(e.type);
// }

//
//  Mouse Out
//
// title.addEventListener("mouseout", run);
//
// function run(e) {
//     console.log(e.type);
// }

//
//  Mouse Enter, Mouse Leave
//
// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);
//
// function run(e) {
//     console.log(e.type);
// }



