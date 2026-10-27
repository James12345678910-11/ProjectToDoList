import "./style.css";


const pages = [
  notificationsPage,
  notesPage,
  todayPage,
  calendarPage,
  tasksPage,
  completedPage,
];

main(pages);






















if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}