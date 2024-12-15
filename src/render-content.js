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

  return {
    todoForm,
    todoTitleInput,
    todoDescriptionInput,
    todoDueDateInput,
    todoPriorityInput,
    submitButton,
  };
}

// Function to handle to-do form submission
function handleTodoFormSubmit(
  project,
  todoTitleInput,
  todoDescriptionInput,
  todoDueDateInput,
  todoPriorityInput,
  todoForm
) {
  const todoTitle = todoTitleInput.value.trim();
  const todoDescription = todoDescriptionInput.value.trim();
  const todoDueDate = todoDueDateInput.value.trim();
  const todoPriority = todoPriorityInput.value.trim();

  if (!todoTitle) {
    alert("Please enter a to-do title.");
    return;
  }

  addTodo(project, todoTitle, todoDescription, todoDueDate, todoPriority);
  displayTodos(project);
  content.removeChild(todoForm);
}

// Function to display the to-do form
function displayTodoForm(project) {
  const {
    todoForm,
    todoTitleInput,
    todoDescriptionInput,
    todoDueDateInput,
    todoPriorityInput,
    submitButton,
  } = createTodoForm();

  // Add event listener to submit button
  submitButton.addEventListener("click", () =>
    handleTodoFormSubmit(
      project,
      todoTitleInput,
      todoDescriptionInput,
      todoDueDateInput,
      todoPriorityInput,
      todoForm
    )
  );

  // Append the form to the content container
  content.appendChild(todoForm);
}

// Function to display to-dos for a given project
function displayTodos(project) {
  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-container";

  if (project && project.todoList) {
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

      // add delete button
      const deleteTodoButton = document.createElement("button");
      deleteTodoButton.textContent = "delete TODO";
      deleteTodoButton.className = "delete-button";
      deleteTodoButton.addEventListener("click", () => {
        deleteTodo(project, todo.id);
        todoContainer.removeChild(todoItem); // Corrected remove method
      });

      todoItem.append(checkbox, todoTitle, todoDescription, deleteTodoButton);
      todoContainer.appendChild(todoItem);
    });
  }

  content.appendChild(todoContainer);
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
