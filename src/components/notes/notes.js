export function notePage() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement('h1');
  heading.textContent = 'Notes';

  contentDiv.appendChild(heading);
}