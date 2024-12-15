import { addTodo, deleteTodo } from "./todo-logic";

// Access the content container element
const content = document.querySelector(".content-container");

// Function to create the to-do form elements
function createTodoForm() {
  const todoForm = document.createElement("div");
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

  const todoPrioritySelect = document.createElement("select");
  todoPrioritySelect.className = "todo-priority-select";

  const priorityOptions = ["low", "mid", "high"];
  priorityOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    todoPrioritySelect.appendChild(optionElement);
  });

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Todo";
  submitButton.className = "submit-todo";

  // Append form elements
  todoForm.append(
    formTitle,
    todoTitleInput,
    todoDescriptionInput,
    todoDueDateInput,
    todoPrioritySelect,
    submitButton
  );

  return {
    todoForm,
    todoTitleInput,
    todoDescriptionInput,
    todoDueDateInput,
    todoPrioritySelect,
    submitButton,
  };
}

// Function to handle to-do form submission
function handleTodoFormSubmit(
  project,
  todoTitleInput,
  todoDescriptionInput,
  todoDueDateInput,
  todoPrioritySelect,
  todoForm
) {
  const todoTitle = todoTitleInput.value.trim();
  const todoDescription = todoDescriptionInput.value.trim();
  const todoDueDate = todoDueDateInput.value.trim();
  const todoPriority = todoPrioritySelect.value;

  if (!todoTitle) {
    alert("Please enter a to-do title.");
    return;
  }

  addTodo(project, todoTitle, todoDescription, todoDueDate, todoPriority);
  console.log("Selected priority:", todoPriority);

  // Append new todo instead of re-rendering
  appendNewTodo(project);
  content.removeChild(todoForm);
}

// Function to display the to-do form
function displayTodoForm(project) {
  const {
    todoForm,
    todoTitleInput,
    todoDescriptionInput,
    todoDueDateInput,
    todoPrioritySelect,
    submitButton,
  } = createTodoForm();

  // Add event listener to submit button
  submitButton.addEventListener("click", () =>
    handleTodoFormSubmit(
      project,
      todoTitleInput,
      todoDescriptionInput,
      todoDueDateInput,
      todoPrioritySelect,
      todoForm
    )
  );

  // Append the form to the content container
  content.appendChild(todoForm);
}

// Function to append a new todo to the existing container
function appendNewTodo(project) {
  const todoContainer = document.querySelector(".todo-container");
  if (!todoContainer) {
    return; // No container yet, displayTodos will handle it
  }

  if (project && project.todoList) {
    // Sort the todoList by priority (high > mid > low)
    project.todoList.sort((a, b) => {
      const priorityOrder = { high: 3, mid: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    const lastTodo = project.todoList[project.todoList.length - 1];
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item"; // Added tile class
    todoItem.dataset.todoId = lastTodo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    const todoTitle = document.createElement("h4");
    todoTitle.textContent = lastTodo.title;

    const todoDescription = document.createElement("p");
    todoDescription.textContent = lastTodo.description;

    const todoDueDate = document.createElement("p");
    todoDueDate.className = "todo-due-date";
    todoDueDate.textContent = `Due Date: ${lastTodo.dueDate}`;

    const todoPriority = document.createElement("p");
    todoPriority.className = "todo-priority";
    todoPriority.textContent = `Priority: ${lastTodo.priority}`;

    // add delete button
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "delete TODO";
    deleteTodoButton.className = "delete-button";
    deleteTodoButton.addEventListener("click", () => {
      deleteTodo(project, lastTodo.id);
      todoContainer.removeChild(todoItem); // Corrected remove method
    });

    todoItem.append(
      checkbox,
      todoTitle,
      todoDescription,
      todoDueDate,
      todoPriority,
      deleteTodoButton
    );
    todoContainer.appendChild(todoItem);
  }
}


// Function to display to-dos for a given project
function displayTodos(project) {
  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container";
  content.appendChild(todoContainer); // Append container first

  if (project && project.todoList) {
    // Sort the todoList by priority (high > mid > low)
    project.todoList.sort((a, b) => {
      const priorityOrder = { high: 3, mid: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    project.todoList.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item"; // Added tile class
      todoItem.dataset.todoId = todo.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "todo-checkbox";

      const todoTitle = document.createElement("h4");
      todoTitle.textContent = todo.title;

      const todoDescription = document.createElement("p");
      todoDescription.textContent = todo.description;

      const todoDueDate = document.createElement("p");
      todoDueDate.className = "todo-due-date";
      todoDueDate.textContent = `Due Date: ${todo.dueDate}`;

      const todoPriority = document.createElement("p");
      todoPriority.className = "todo-priority";
      todoPriority.textContent = `Priority: ${todo.priority}`;

      // add delete button
      const deleteTodoButton = document.createElement("button");
      deleteTodoButton.textContent = "delete TODO";
      deleteTodoButton.className = "delete-button";
      deleteTodoButton.addEventListener("click", () => {
        deleteTodo(project, todo.id);
        todoContainer.removeChild(todoItem); // Corrected remove method
      });

      todoItem.append(
        checkbox,
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        deleteTodoButton
      );
      todoContainer.appendChild(todoItem);
    });
  }
}

// Function to render the main content for a project
function renderContent(project) {
  content.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = project.title;

  const line = document.createElement("hr");

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.className = "add-task-button";
  addTaskButton.addEventListener("click", () => {
    displayTodoForm(project);
  });

  content.append(projectTitle, line, addTaskButton);
  displayTodos(project);
}

export { displayTodoForm, displayTodos, renderContent };
