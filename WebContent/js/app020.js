let value;

// const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardRow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardRow;

//
// Child Nodes - Includes Text (\n, ' ')
//
// value = todoList.childNodes;

//
// Children - Element
//
// value = todoList.children;
// value = todoList.children[0];   // First Element
// value = todoList.children[todoList.children.length - 1]; // Last Element
// value = todoList.children[0].textContent = "Changed!";  // Todo 1 to Changed!
//
//
// value = cardRow;
// value = cardRow.children;
// value = cardRow.children[2].children[1].textContent = "This one is changed too!";
//
//
// value = todoList;
// value = todoList.firstChild;    // todoList.children[0];
// value = todoList.lastChild;     // todoList.children[todoList.children.length - 1];
// value = todoList.childElementCount; // todoList.children.length;
//
//
// value = cardRow;
// value = cardRow.parentElement;
// value = cardRow.parentElement.parentElement;


//
// Element Siblings
//
// value = todo;
// value = todo.previousElementSibling;
value = todo.nextElementSibling;



console.log(value);