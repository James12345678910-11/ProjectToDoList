
import { Calendar } from 'fullcalendar';
import dayGridPlugin from 'fullcalendar/daygrid';
import interactionPlugin from 'fullcalendar/interaction';

export function calendarPage() {

  const sectionDiv = document.createElement('section');
  const contentDiv = document.querySelector('.content');
  const contentCal = document.createElement('div');

  contentCal.id = 'calendar';

  sectionDiv.appendChild(contentCal);
  contentDiv.appendChild(sectionDiv);


  const calendar = new Calendar(contentCal, {
    plugins: [
      dayGridPlugin,
      interactionPlugin,
    ],

    initialView: 'dayGridMonth',

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth',
    },

    events: [
      {
        title: 'Finish To-Do List',
        start: '2026-10-27',
      },
      {
        title: 'Study JavaScript',
        start: '2026-10-29',
      },
    ],

    dateClick: function(info) {
      console.log('You clicked:', info.dateStr);
    },
  });

  calendar.render();
}
