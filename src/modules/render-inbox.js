import { displayTodos, createTodo } from "./render-content";
import { getTodos, getProject, projectsArray } from "./todo-logic";

// Get the menu items
const menuItems = document.querySelectorAll(".menu-item");

// Convert NodeList to an array
const menuButtons = Array.from(menuItems);
const inboxBtn = menuButtons[0];
const todayBtn = menuButtons[1];
const content = document.querySelector(".content-container");
const todoContainer = document.createElement("div");
todoContainer.className = "todo-container";

console.log("inboxBtn:", inboxBtn); // Log the inboxBtn element

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
  console.log("handleInboxClick called"); // Log when the function is called

  // reset the containers
  content.innerHTML = "";
  todoContainer.innerHTML = "";

  // create Title
  const title = document.createElement("h1");
  title.textContent = "all TODOS";
  const line = document.createElement("hr");

  // fetch all the todos
  let todoList = getAllTodos();

  // build all of them
  todoList.forEach((todo) => createTodo(todoContainer, todo, null, () => {}));
  content.append(title, line, todoContainer);
  console.log("hey");
}
inboxBtn.addEventListener("click", handleInboxClick);
console.log("Event listener attached to inboxBtn"); // Log after attaching the listener

function handleTodayBtn() {
  // Reset the containers
  content.innerHTML = "";
  todoContainer.innerHTML = "";

  // Create Title
  const title = document.createElement("h1");
  title.textContent = "Today Tasks";
  const line = document.createElement("hr");

  // Append title and line to the content
  content.append(title, line);

  // Fetch all the todos
  let todoList = getAllTodos();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Filter todos where the due date matches today's date
  const todayList = todoList.filter((todo) => todo.dueDate === today);

  // Check if there are any todos for today
  if (todayList.length === 0) {
    const noTasksMessage = document.createElement("p");
    noTasksMessage.textContent = "No tasks for today!";
    content.appendChild(noTasksMessage);
    return;
  }

  // Build and append today's todos
  todayList.forEach((todo) => createTodo(todoContainer, todo, null, () => {}));
  content.appendChild(todoContainer);
}

// todayBtn.addEventListener("click", handleInboxClick);
