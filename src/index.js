import "./style.css";
import { addProject, addTodo, projectsArray } from "./todo-logic";
import { displayProjects } from "./render-projects";

// Create some initial projects and todos
addProject("Project 1");
addProject("Project 2");

addTodo(projectsArray[0], "Todo 1", "Description 1", "2023-12-31", "High");
addTodo(projectsArray[0], "Todo 2", "Description 2", "2024-01-15", "Medium");
addTodo(projectsArray[1], "Todo 3", "Description 3", "2023-12-25", "Low");

displayProjects();
