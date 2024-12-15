// import
import { addProject, projectsArray } from "./todo-logic";
import { renderContent } from "./render-content";
// access buttons
const addProjectButton = document.querySelector("#add-project-button");
const projectsContent = document.querySelector(".projects-list");

// show projects
function displayProjects() {
  projectsContent.innerHTML = "";
  projectsArray.forEach((project) => {
    // project tile container
    const projectTile = document.createElement("div");
    projectTile.className = "project-tile";
    projectTile.dataset.projectId = project.id;

    const projectTileIcon = document.createElement("img");
    const projectTileName = document.createElement("p");
    projectTileName.textContent = project.title;
    // add the elements to the tile
    projectTile.append(projectTileIcon, projectTileName);

    projectTile.addEventListener("click", () => {
      renderContent(project);
    });

    // add the tile itself to the projects content
    projectsContent.appendChild(projectTile);
  });
}

// Display project form
let projectForm = null;
function displayProjectForm() {
  // Create form elements
  projectForm = document.createElement("div");
  projectForm.className = "project-form";

  const formTitle = document.createElement("h3");
  formTitle.textContent = "Add New Project";

  const projectTitleInput = document.createElement("input");
  projectTitleInput.type = "text";
  projectTitleInput.placeholder = "Project Title";
  projectTitleInput.className = "project-title-input";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Project";
  submitButton.className = "submit-project";

  // Append form elements
  projectForm.append(formTitle, projectTitleInput, submitButton);
  projectsContent.appendChild(projectForm);

  // Disable add project button
  addProjectButton.disabled = true;

  // Add event listener to submit button
  submitButton.addEventListener("click", () => {
    const projectTitle = projectTitleInput.value.trim();
    if (projectTitle) {
      addProject(projectTitle);
      displayProjects();
      if (projectsContent.contains(projectForm)) {
        projectsContent.removeChild(projectForm);
        projectForm = null;
      }
      addProjectButton.disabled = false;
    }
  });
}

addProjectButton.addEventListener("click", () => {
  displayProjectForm();
});

export { addProjectButton, displayProjects };
