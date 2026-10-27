function main() {

indexPage.load

const sidebarButtons = document.querySelectorAll(".sidebar-button");

  sidebarButtons.forEach((button, index) => {
    enableBtn(button, pages[index]);
  });
}

function activeBtn() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
  button.addEventListener('click', () => {

    
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});
}

function enableBtn(button, page) {
  button.addEventListener("click", () => {
    removeAllChildNodes();
    page.load();
  });
}

function removeAllChildNodes() {
  const contentDiv = querySelector(".content");
  while (contentDiv.hasChildNodes()) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

export {main};