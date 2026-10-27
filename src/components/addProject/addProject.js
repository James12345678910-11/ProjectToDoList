export function addProjectPage() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement("h1");
    heading.textContent = "Add a new Project";

  contentDiv.appendChild(heading);
}