export function completedPage() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement('h1');
  heading.textContent = 'Completed';

  contentDiv.appendChild(heading);
}