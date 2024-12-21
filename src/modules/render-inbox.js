import { createTodo } from "./render-content";
import { projectsArray } from "./todo-logic";

// Get the menu items
const menuItems = document.querySelectorAll(".menu-item");
const content = document.querySelector(".content-container");
const todoContainer = document.createElement("div");
todoContainer.className = "todo-container";

// Assign buttons directly
const [inboxBtn, todayBtn, weekBtn] = Array.from(menuItems);

// Utility function to get all todos from projects
function getAllTodos() {
  return projectsArray.flatMap(project => project.todoList);
}

// Function to create and append title and line
function createTitle(titleText) {
  const title = document.createElement("h1");
  title.textContent = titleText;
  const line = document.createElement("hr");
  content.append(title, line);
}

// Function to clear content and todoContainer
function clearContent() {
  content.innerHTML = "";
  todoContainer.innerHTML = "";
}

// Function to render todos in the container
function renderTodos(todoList) {
  if (todoList.length === 0) {
    const noTasksMessage = document.createElement("p");
    noTasksMessage.textContent = "No tasks available!";
    content.appendChild(noTasksMessage);
  } else {
    todoList.forEach(todo => createTodo(todoContainer, todo, null,));
    content.appendChild(todoContainer);
  }
}

// Handle Inbox button click
function handleInboxClick() {
  clearContent();
  createTitle("All TODOS");
  renderTodos(getAllTodos());
}

// Handle Today button click
function handleTodayBtn() {
  clearContent();
  createTitle("Today Tasks");

  const today = new Date().toISOString().split("T")[0];
  const todayList = getAllTodos().filter(todo => todo.dueDate === today);

  renderTodos(todayList);
}

// Handle Week button click
function handleWeekBtn() {
  clearContent();
  createTitle("This Week's Tasks");

  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const weekList = getAllTodos().filter(todo => {
    const todoDate = new Date(todo.dueDate);
    return todoDate >= today && todoDate <= nextWeek;
  });

  renderTodos(weekList);
}

// Attach event listeners to buttons
inboxBtn.addEventListener("click", handleInboxClick);
todayBtn.addEventListener("click", handleTodayBtn);
weekBtn.addEventListener("click", handleWeekBtn);
