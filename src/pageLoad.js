export default function loadPage() {
  const header = document.querySelector("header");

  // Create and add elements
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to My Restaurant!";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is some description about the restaurant.";

  header.append(heading, paragraph);
}
