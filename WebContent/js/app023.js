// Session Storage - Key and Value

// Buttons
const addButton = document.querySelector("#add");
const delButton = document.querySelector("#delete");
const delAllButton = document.querySelector("#clear");

// Inputs
const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

addButton.addEventListener("click", addItem);
delButton.addEventListener("click", deleteItem);
delAllButton.addEventListener("click", clearItems);

function addItem(e) {
    sessionStorage.setItem(addKey.value, addValue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deleteKey.value);
}

function clearItems(e) {
    sessionStorage.clear();
}
