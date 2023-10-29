// selectore:
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todolist");
let filterOptions = document.querySelector(".filter-todos");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filterOptions.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getLocalTodos);
function addTodo(e) {
  e.preventDefault();
  // get todo input -> create new todo and reset input

  let createDiv = document.createElement("div");
  createDiv.classList.add("todo");
  let newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>
    `;
  createDiv.innerHTML = newTodo;
  //   append
  todoList.appendChild(createDiv);
  saveLocalItem(todoInput.value);
  todoInput.value = "";
}

function checkRemove(e) {
  let classes = [...e.target.classList];
  let item = e.target;
  let todo = item.parentElement.parentElement;
  //   console.log();
  if (classes[1] === "fa-check-square") {
    todo.classList.toggle("completed");
  } else if (classes[1] === "fa-trash-alt") {
    removeLocalTodos(todo);
    todo.remove();
  }
}

function filterTodo(e) {
  // console.log(e.target.value);
  let todos = [...todoList.childNodes];
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalItem(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function getLocalTodos() {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.forEach((todo) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("todo");
    let newTodo = `
    <li>${todo}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>
    `;
    createDiv.innerHTML = newTodo;
    todoList.appendChild(createDiv);
  });
}

function removeLocalTodos(todo) {
  console.log(todo.children[0].innerHTML);
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  let filtertodos = savedTodos.filter((t) => t !== todo.children[0].innerText);
  localStorage.setItem("todos", JSON.stringify(filtertodos));
}
