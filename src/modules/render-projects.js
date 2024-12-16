// Import necessary functions and data
import { addProject, projectsArray } from "./todo-logic";
import { renderContent } from "./render-content";

// Access DOM elements
const addProjectButton = document.querySelector(".add-project-button");
const projectsContent = document.querySelector(".projects-list");

// Function to display all projects
function displayProjects() {
  projectsContent.innerHTML = ""; // Clear existing content

  projectsArray.forEach((project) => {
    // Create project tile
    const projectTile = document.createElement("div");
    projectTile.className = "project-tile";
    projectTile.dataset.projectId = project.id;

    const projectTileIcon = document.createElement("div");
    const projectTileName = document.createElement("p");
    projectTileName.textContent = project.title;

    // Add elements to the tile
    projectTile.append(projectTileIcon, projectTileName);

    // Add event listener to render project content when clicked
    projectTile.addEventListener("click", () => {
      renderContent(project);
    });

    // Add the tile to the projects content
    projectsContent.appendChild(projectTile);
  });
}

// Function to create the project form elements
function createProjectForm() {
  const projectForm = document.createElement("div");
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

  return { projectForm, projectTitleInput, submitButton };
}

// Function to handle project form submission
function handleProjectFormSubmit(projectTitleInput, projectForm) {
  const projectTitle = projectTitleInput.value.trim();

  if (!projectTitle) {
    alert("Please enter a project title.");
    return;
  }

  addProject(projectTitle);
  displayProjects();

  if (projectsContent.contains(projectForm)) {
    projectsContent.removeChild(projectForm);
  }

  addProjectButton.disabled = false;
}

// Function to display the project form
function displayProjectForm() {
  const { projectForm, projectTitleInput, submitButton } = createProjectForm();

  // Add event listener to submit button
  submitButton.addEventListener("click", () =>
    handleProjectFormSubmit(projectTitleInput, projectForm)
  );

  // Append the form to the projects content
  projectsContent.appendChild(projectForm);

  // Disable add project button while the form is displayed
  addProjectButton.disabled = true;
}

// Add event listener to the "Add Project" button
addProjectButton.addEventListener("click", () => {
  displayProjectForm();
});

export { addProjectButton, displayProjects };
