// import
import { TodoList, projectsArray } from "./todo";
// access buttons
const addProjectButton = document.querySelector(".add-project");
const content = document.querySelector(".content-container");
const projectsContent = document.querySelector(".projects-section");

function displayProjects() {
  projects.forEach((project) => {
    // project tile container
    const projectTile = document.createElement("div");
    projectTile.className = "project-tile";

    const projectTileIcon = document.createElement("img");
    const projectTileName = document.createElement("p");
    projectTileName.textContent = project.title;
    // add the elements to the tile
    projectTile.append(projectTileIcon, projectTileName);
    // add the tile itself to the projects content
    projectsContent.appendChild(projectTile);
  });
}
//display content function
// function displayContent() {
//   content.appendChild(addProjectButton);
// }
// export { addProjectButton, displayContent };
