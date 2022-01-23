const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDOList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const listItem = event.target.parentElement;
  listItem.remove();
  console.log(listItem);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(listItem.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const listItem = document.createElement("li");
  listItem.id = newTodo.id;
  const spanItem = document.createElement("span");
  spanItem.innerText = newTodo.text;

  const buttonItem = document.createElement("button");
  buttonItem.innerText = "X";
  buttonItem.addEventListener("click", deleteTodo);

  listItem.appendChild(spanItem);
  listItem.appendChild(buttonItem);
  toDOList.appendChild(listItem);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
