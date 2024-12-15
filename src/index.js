import "./style.css";
import { renderContent } from "./render-content";
import { displayProjects } from "./render-projects";
import { projectsArray } from "./todo-logic";

// Display projects initially
displayProjects();

// Render default content (first project) on page load
if (projectsArray.length > 0) {
  renderContent(projectsArray[0]);
}
