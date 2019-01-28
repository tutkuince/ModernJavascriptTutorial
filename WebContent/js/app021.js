// Create new dynamic element
// <a id = "clear-todos" class="btn btn-dark" href="#">Delete All Todos</a>

// const newLink = document.createElement("a");
//
// const cardBody = document.getElementsByClassName("card-body")[1];
//
// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com";
// newLink.target = "_blank";
//
// newLink.appendChild(document.createTextNode("Go to Another Page"));
//
// cardBody.appendChild(newLink);
//
// console.log(newLink);


//  // Delete dynamic element

//  const todoList = document.querySelector("ul.list-group");
//  const todos = document.querySelectorAll("li.list-group-item");
//
//  console.log(todoList);
//  console.log(todos);
//
// //
//  // remove()
//  //
//  // todos[todos.length - 1].remove();  // Remove last element
//
//
//  //
//  // remove child
//  //
//  todoList.removeChild(todoList.lastElementChild);   // todoList.removeChild(todoList[3]);


//
// Replace Elements replaceChild(newElement, oldElement);
//
// const cardBody = document.querySelectorAll(".card-body")[1];
//
//  const newElement = document.createElement("h3");
//  newElement.className = "card-title";
//  newElement.id = "tasks-title";
//  newElement.textContent = "New Todos";
//
//
//  // Old Element
//  const oldElement = document.querySelector("#tasks-title");
//
//  cardBody.replaceChild(newElement, oldElement);
//
// console.log(cardBody);


// Replace, Remove and Add Dynamic Attribute

const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

// todoInput.className = "form-control newClass";
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

element = todoInput;
element = todoInput.getAttribute("placeholder"); // todoInput.placeholder;
element = todoInput.setAttribute("placeholder", "What's up man?");
element = todoInput.setAttribute("title", "Input");

element = todoInput;

element = todoInput.hasAttribute("name");   // true
element = todoInput.removeAttribute("title");

element = todoInput;
console.log(element);