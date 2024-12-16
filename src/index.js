import "./style.css";
import { renderContent } from "./modules/render-content";
import { displayProjects } from "./modules/render-projects";
import { projectsArray } from "./modules/todo-logic";

// Display projects initially
displayProjects();

// Render default content (first project) on page load
if (projectsArray.length > 0) {
  renderContent(projectsArray[0]);
}
