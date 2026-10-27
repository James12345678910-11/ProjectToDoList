import "./style.css";
import {main} from "./main.js";
import {addProjectPage} from "./components/addProject/addProject.js";
import { notificationPage } from "./components/notifications/notifications.js";
import { notePage } from "./components/notes/notes.js";
import { todayPage } from "./components/today/today.js";
import { calendarPage } from "./components/calendar/calendar.js";
import { completedPage } from "./components/completed/completed.js";



const pages = [
  addProjectPage,
  notificationPage,
  notePage,
  todayPage,
  calendarPage,
  completedPage,
];

main(pages);

console.log(typeof enableBtn);
console.log(typeof removeAllChildNodes);