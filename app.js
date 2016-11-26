var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("ul");
var list_contain = document.getElementById("main");
var listArray = [];
//this function will add the user input in array and show it in todo list
function add_in_list() {
    if (todoInput.value == "") {
        alert("Please write something");
    } 
    else {
        listArray.push(todoInput.value);
        data = "";
        l = listArray.length
        for (var i = 0; i < l; i++) {
            data += "<li class='list_item' id='btn"+i+"'>"+listArray[i]+"<input type='button' value='Delete' class='btn' onclick=del_list();></li>";
            todoList.innerHTML = data;
            document.getElementById("rm").style.display = "inline";
        }
    }
    todoInput.value = "";
} 
//remove todo clicked by user
function del_list() {
    var button = document.getElementsByClassName("btn");
    var buttonCount = button.length;
    for(var i=0;i<buttonCount;i++) {
        button[i].onclick = function(e) {
            getId = this.parentElement.id;
            document.getElementById(getId).style.display = "none";
        }
    }
}
//reload the page so that everything goes to remove
function remove() {
    location.reload();
}