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
//this is pretty fucking stupid if i think about it why do i have to repeat myself
//function enableNotificationsBtn() {
 
 // const notificationsButton = document.querySelector("").children[0];
 // notificationsButton.addEventListener("click", () =>{
 //   removeAllChildNodes();
 //   notificationsPage.load();
//  });
//}

//Notes
//function enableNotesBtn() {
//  const notesButton = document.querySelector("").children[1];
 // notificationsButton.addEventListener("click", () =>{
 //   removeAllChildNodes();
 //   notesPage.load();
//  });
//}
//Today
//Calendar
//Tasks
//Completed

//hopefully this works
function enableBtn(button, page) {
  button.addEventListener("click", () => {
    removeAllChildNodes();
    page.load();
  });
}



function removeAllChildNodes() {
  const contentDiv = querySelector(".content"); //double check if its really content or main
  while (contentDiv.hasChildNodes()) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}


export {main};