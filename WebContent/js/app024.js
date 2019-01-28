// Local Storage

//
// SetItem
//
// localStorage.setItem("test1", "test1");
// localStorage.setItem("test2", "test2");


//
// GetItem
//
// const value = localStorage.getItem("test1");
// console.log(value);
// console.log(typeof value);  // String


//
// Clear Local Storage -> clear();
//
// localStorage.clear();

// if (localStorage.getItem("test3") === null){
//     console.log("test3 not found!");
// }


//
// Array -> Use JSON object for array
//
// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// // localStorage.setItem("todos", todos);
// localStorage.setItem("todos", JSON.stringify(todos));
//
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));
    e.preventDefault();
}
