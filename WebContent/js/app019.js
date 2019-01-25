const element = document.querySelector("#btn-clear");

// Element Properties
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent);   // Clear All Paragraph
// console.log(element.innerHTML);
// console.log(element.href);
console.log(element.style);

element.className = "btn btn-primary";

element.style.backgroundColor = "dodgerBlue";
element.style.color = "white";
element.style.fontWeight = "bold";
element.style.padding = "10px";
element.style.border = "1px solid #ccc";
element.style.textDecoration = "none";
element.href = "https://www.google.com";
element.target = "_blank";

// element.textContent = "<span>Clear!!!</span>";   // <span>Clear!!!</span>
element.innerHTML = "<span>Clear!!!</span>";    // Clear!!!

// const pElements = document.querySelectorAll(".paragraph-p");
//
// // pElements.forEach(e => e.style.backgroundColor = "orange");
// pElements.forEach(function (e) {
//     e.style.backgroundColor = "orange";
//     e.style.color = "#FFF";
// })

let pElementsEven = document.querySelectorAll("p:nth-child(even)");
let pElementsOdd = document.querySelectorAll("p:nth-child(odd)");

console.log(pElementsEven);
console.log(pElementsOdd);

pElementsEven.forEach(function (e) {
    e.style.backgroundColor = "orange";
    e.style.color = "#FFF";
});

pElementsOdd.forEach(function (e) {
    e.style.backgroundColor = "red";
    e.style.color = "#FFF";
});