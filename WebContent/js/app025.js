// Select elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const listGroup = document.querySelector(".list-group");

eventListeners();

// All EventListeners
function eventListeners() {
    todoForm.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value;

    addTodoToUI(newTodo);

    e.preventDefault();
}

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