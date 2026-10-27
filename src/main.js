function eventListener(event) {

  todayBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    todayPage();
  });

  calendarBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    calendarPage();
  });

  todoBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    todoPage();
  });

  notificationBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    notificationsPage();
  });

  projectsBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    projectsPage();
  });

  notesBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    notesPage();
  });

}