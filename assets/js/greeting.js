const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
const todoItems = document.querySelector("#todo");
const TODOACT_CLASSNAME = "toto__activity";

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  let username = loginInput.value;
  paintGreeting(username);
  todoItems.classList.add(TODOACT_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
}

if (savedUsername === null) {
  // Show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todoItems.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
  todoItems.classList.add(TODOACT_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
