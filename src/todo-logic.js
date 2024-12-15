let projectIdCounter = 0;
let todoIdCounter = 0;

class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = todoIdCounter++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(title, todoList) {
    this.id = projectIdCounter++;
    this.title = title;
    this.todoList = todoList || [];
  }
}
// create array of projects
let projectsArray = [new Project("sayed", [new Todo("sayed", "sayed")])];

// add project function
function addProject(title) {
  let project = new Project(title);
  projectsArray.push(project);
}

// add Todo function
function addTodo(project, title, description, dueDate, priority) {
  let newTodo = new Todo(title, description, dueDate, priority);
  project.todoList.push(newTodo);
  console.log(project);
}
// delete todo function
function deleteTodo(project, todoId) {
  project.todoList = project.todoList.filter((todo) => todo.id !== todoId);
}
export { addTodo, addProject, deleteTodo, projectsArray };
