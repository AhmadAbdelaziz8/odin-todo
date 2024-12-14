class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(title, todoList) {
    this.title = title;
    this.todoList = todoList;
  }
}
// create array of projects
let projectsArray = [];

// create array of projects
let projectTodoList = [];

// add project function
function addProject(title) {
  let project = new Project(title);
  projectsArray.push(project);
}

// add Todo function
function addTodo(title, description, dueDate, priority) {
  let newTodo = new Todo(title, description, dueDate, priority);
  projectTodoList.push(newTodo);
}

export { addTodo, addProject, projectsArray };
