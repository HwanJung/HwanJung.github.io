const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todo = document.querySelector("#todo");

let savedTodos = [];
const storageList = JSON.parse(localStorage.getItem("list"));
if(storageList !== null) {
    storageList.forEach((item) => printList(item));
    savedTodos = storageList;
}

function deletList(event){
    const li = event.target.parentElement;
    li.remove();
    savedTodos = savedTodos.filter((item) => item.id !== li.id);
    localStorage.setItem("list", JSON.stringify(savedTodos));
}

function addList(event){
    event.preventDefault();
    const date = new Date();
    const id = String(date.getTime());
    const toSave = {content: todo.value, id: id};
    save(toSave);
    printList(toSave);
    todo.value = "";
}

function printList(toSave){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = toSave.content;
    button.innerText = "x";
    button.addEventListener("click", deletList);
    li.appendChild(span);
    li.appendChild(button);
    li.id = toSave.id;
    todoList.appendChild(li);
}

function save(toSave) {
    savedTodos.push(toSave);
    localStorage.setItem("list", JSON.stringify(savedTodos));
}

todoForm.addEventListener("submit", addList);

