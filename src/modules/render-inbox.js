import { displayTodos, createTodo } from "./render-content";
import { getTodos, getProject, projectsArray } from "./todo-logic";

// Get the menu items
const menuItems = document.querySelectorAll(".menu-item");

// Convert NodeList to an array
const menuButtons = Array.from(menuItems);
const inboxBtn = menuButtons[0];
const content = document.querySelector(".content-container");
const todoContainer = document.createElement("div");
todoContainer.className = "todo-container";

function getAllTodos() {
  // array of arrays of todos
  let arrayTodos = [];
  let spreadArray = [];
  projectsArray.forEach((project) => {
    arrayTodos.push(project.todoList);
  });
  spreadArray = arrayTodos.flat();
  return spreadArray;
}

function handleInboxClick() {
  content.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "all TODOS";

  const line = document.createElement("hr");

  let todoList = getAllTodos();
  todoList.forEach((todo) => createTodo(todoContainer, todo));
  content.appendChild(todoContainer);
  console.log('hey');
}
inboxBtn.addEventListener("click", handleInboxClick());
export { menuButtons };
