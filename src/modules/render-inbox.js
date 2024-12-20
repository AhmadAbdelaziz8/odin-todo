import { createTodo } from "./render-content";
import { projectsArray } from "./todo-logic";

// Get the menu items
const menuItems = document.querySelectorAll(".menu-item");

// Convert NodeList to an array
const menuButtons = Array.from(menuItems);
const inboxBtn = menuButtons[0];
const todayBtn = menuButtons[1];
const content = document.querySelector(".content-container");
const todoContainer = document.createElement("div");
todoContainer.className = "todo-container";
const weekBtn = menuButtons[2]; // Assuming the third button is for the week

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

todayBtn.addEventListener("click", handleTodayBtn);

function handleWeekBtn() {
  // Reset the containers
  content.innerHTML = "";
  todoContainer.innerHTML = "";

  // Create Title
  const title = document.createElement("h1");
  title.textContent = "This Week's Tasks";
  const line = document.createElement("hr");

  // Append title and line to the content
  content.append(title, line);

  // Fetch all the todos
  let todoList = getAllTodos();

  // Get today's date and calculate the date 7 days from now
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  // Filter todos whose due dates fall within the next 7 days
  const weekList = todoList.filter((todo) => {
    const todoDate = new Date(todo.dueDate);
    return todoDate >= today && todoDate <= nextWeek;
  });

  // Check if there are any tasks for the week
  if (weekList.length === 0) {
    const noTasksMessage = document.createElement("p");
    noTasksMessage.textContent = "No tasks scheduled for this week!";
    content.appendChild(noTasksMessage);
    return;
  }

  // Build and append this week's todos
  weekList.forEach((todo) => createTodo(todoContainer, todo, null, () => {}));
  content.appendChild(todoContainer);
}

weekBtn.addEventListener("click", handleWeekBtn);
