function main(pages) {
  const buttons = document.querySelectorAll(".sidebar .button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      removeAllChildNodes();
      pages[index]();

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

function removeAllChildNodes() {
  document.querySelector(".content").replaceChildren();
}

export { main };