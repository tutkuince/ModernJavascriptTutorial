// Select elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const listGroup = document.querySelector(".list-group");
const cardBody1 = document.querySelectorAll(".card-body")[0];
const cardBody2 = document.querySelectorAll(".card-body")[1];

eventListeners();

// All EventListeners
function eventListeners() {
    todoForm.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    cardBody2.addEventListener("click", deleteTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value;

    if (newTodo === "")
        showAlert("danger", "Please add a todo!");
    else {
        addTodoToUI(newTodo);
        addTodoToLocalStorage(newTodo);
        showAlert("success", "Todo is added!");
    }



    e.preventDefault();
}

// Load All Todos to UI
function loadAllTodosToUI() {
    let todoList = getTodosFromLocalStorage();

    todoList.forEach(t => addTodoToUI(t));
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        const text = e.target.parentElement.parentElement.innerText;    // textContent
        deleteTodoFromLocalStorage(text);
        showAlert("success", `${text} is deleted!`);
    }

}

function deleteTodoFromLocalStorage(text) {
    let todos = getTodosFromLocalStorage();

    todos.forEach(function (todo, index) {
        if (todo === text)
            todos.splice(index, 1);
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

// Return todos from Local Storage
function getTodosFromLocalStorage() {
    let todos;

    if (localStorage.getItem("todos") === null)
        todos = [];
    else
        todos = JSON.parse(localStorage.getItem("todos"));

    return todos;
}

// Add new todo to LocalStroage
function addTodoToLocalStorage(newTodo) {
    let todos = getTodosFromLocalStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    /**
     * <div class="alert alert-warning" role="alert">
        This is a warning alert—check it out!
     </div>
     * */

    const div = document.createElement("div");
    div.id = "message";
    div.className = `alert alert-${type}`;
    div.appendChild(document.createTextNode(message));

    cardBody1.prepend(div); // add as a first child element

    // setTimeout
    setTimeout(() => div.remove(), 1000);

    // todoInput.addEventListener("keypress", removeMessage);
}

// Remove message with keypress in todoInput
// function removeMessage(e) {
//     const div = document.querySelector("#message");
//     if(div !== null)
//         div.remove();
// }

function addTodoToUI(newTodo) {
    /**
     *  <!--<li class="list-group-item d-flex justify-content-between">-->
     <!--Todo 1-->
     <!--<a href = "#" class ="delete-item">-->
     <!--<i class = "fa fa-remove"></i>-->
     <!--</a>-->
     <!--</li>-->
     * */

    // Create listItem
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    // Create aLink
    const aLink = document.createElement("a");
    aLink.href = "#";
    aLink.className = "delete-item";
    aLink.innerHTML = "<i class = \"fa fa-remove\"></i>";

    // Append Todo Text to listItem
    listItem.appendChild(document.createTextNode(newTodo));

    // Append aLink to listItem
    listItem.appendChild(aLink);

    // Append listItem to listGroup
    listGroup.appendChild(listItem);

    // Clear todoInput
    todoInput.value = "";
}