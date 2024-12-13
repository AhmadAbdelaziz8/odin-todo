import "./style.css";
import loadPage from "./pageLoad.js";
import generateMeat from "./meat.js";
import generateJuices from "./juices.js";
import generateVegs from "./vegs.js";

loadPage();
let content = document.querySelector("#content");
// get the buttons
let buttons = document.querySelectorAll(".nav-button");
// build the page when the buttons pressed
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "meat": {
        const arrayOfContent = generateMeat();
        content.innerHTML = "";
        arrayOfContent.forEach((e) => {
          content.appendChild(e);
        });
        break;
      }
      case "juices": {
        const arrayOfContent = generateJuices();
        content.innerHTML = "";
        arrayOfContent.forEach((e) => {
          content.appendChild(e);
        });
        break;
      }
      case "vegs": {
        const arrayOfContent = generateVegs();
        content.innerHTML = "";
        arrayOfContent.forEach((e) => {
          content.appendChild(e);
        });
        break;
      }
    }
  });
});
