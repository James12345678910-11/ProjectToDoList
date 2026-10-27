export function projectPage() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement('h1');
  heading.textContent = 'Projects';

  contentDiv.appendChild(heading);
}