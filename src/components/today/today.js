export function todayPage() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement('h1');
  heading.textContent = 'Today';

  contentDiv.appendChild(heading);
}