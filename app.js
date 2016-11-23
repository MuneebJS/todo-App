var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("ul");
var todoAdd = document.getElementById("todo-add");
array = [];


function add_in_list() {
    todoList.innerHTML = "<li>"+todoInput.value+"</li>";
}
