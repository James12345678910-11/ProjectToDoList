export function todoPage() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement('h1');
  heading.textContent = 'ToDo';

  contentDiv.appendChild(heading);
}