export function notificationPage() {
  const contentDiv = document.querySelector(".content");

  const heading = document.createElement("h1");
  heading.textContent = "Notifications";

  contentDiv.appendChild(heading);
}