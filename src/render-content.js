// access elements
import { addTodo, deleteTodo } from "./todo-logic";
const content = document.querySelector(".content-container");

// Display todo form
let todoForm = null;
function displayTodoForm(project) {
  // Create form elements
  todoForm = document.createElement("div");
  todoForm.className = "todo-form";

  const formTitle = document.createElement("h3");
  formTitle.textContent = "Add New Todo";

  const todoTitleInput = document.createElement("input");
  todoTitleInput.type = "text";
  todoTitleInput.placeholder = "Todo Title";
  todoTitleInput.className = "todo-title-input";

  const todoDescriptionInput = document.createElement("input");
  todoDescriptionInput.type = "text";
  todoDescriptionInput.placeholder = "Todo Description";
  todoDescriptionInput.className = "todo-description-input";

  const todoDueDateInput = document.createElement("input");
  todoDueDateInput.type = "date";
  todoDueDateInput.placeholder = "Due Date";
  todoDueDateInput.className = "todo-due-date-input";

  const todoPriorityInput = document.createElement("input");
  todoPriorityInput.type = "text";
  todoPriorityInput.placeholder = "Priority";
  todoPriorityInput.className = "todo-priority-input";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Todo";
  submitButton.className = "submit-todo";

  // Append form elements
  todoForm.append(
    formTitle,
    todoTitleInput,
    todoDescriptionInput,
    todoDueDateInput,
    todoPriorityInput,
    submitButton
  );
  content.appendChild(todoForm);

  // Add event listener to submit button
  submitButton.addEventListener("click", () => {
    const todoTitle = todoTitleInput.value.trim();
    const todoDescription = todoDescriptionInput.value.trim();
    const todoDueDate = todoDueDateInput.value.trim();
    const todoPriority = todoPriorityInput.value.trim();
    if (todoTitle) {
      addTodo(project, todoTitle, todoDescription, todoDueDate, todoPriority);
      displayTodos(project);
      content.removeChild(todoForm);
      todoForm = null;
    }
  });
}

function displayTodos(project) {
  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container";

  if (project && project.todoList) {
    project.todoList.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      todoItem.dataset.todoId = todo.id;

      const todoTitle = document.createElement("h4");
      todoTitle.textContent = todo.title;

      const todoDescription = document.createElement("p");
      todoDescription.textContent = todo.description;

      const deleteTodoButton = document.createElement("button");
      deleteTodoButton.className = "delete-button";
      deleteTodoButton.addEventListener("click", () => {
        deleteTodo(project, todo.id);
        todoContainer.remove(todoItem);
      });

      todoItem.append(todoTitle, todoDescription, deleteTodoButton);
      todoContainer.appendChild(todoItem);
    });
  }

  content.appendChild(todoContainer);
}

function renderContent(project) {
  content.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = project.title;

  const line = document.createElement("hr");

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.className = "addTaskButton";
  addTaskButton.addEventListener("click", () => {
    if (!todoForm) {
      displayTodoForm(project);
    }
  });

  content.append(projectTitle, line, addTaskButton);
  displayTodos(project);
}

export { displayTodoForm, displayTodos, renderContent };
