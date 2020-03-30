import {
 CalendarEvent,
 CalendarEventAction
} from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';

export interface iMyEvent extends CalendarEvent {
 description?: string;
}
export var iEventColors: any = {
 meeting: {
   primary: '#ad2121',
   secondary: '#FAE3E3'
 },
 work: {
   primary: '#1e90ff',
   secondary: '#D1E8FF'
 },
 appointmet: {
   primary: '#e3bc08',
   secondary: '#FDF1BA'
 }
};
// export var iEventAction: CalendarEventAction[] = [
//  {
//    label: '<i class="fa fa-fw fa-pencil"></i>',
//    a11yLabel: 'Edit',
//    onClick: ({ event }: { event: CalendarEvent }): void => {
//      this.handleEvent('Edited', event);
//    }
//  },
//  {
//    label: '<i class="fa fa-fw fa-times"></i>',
//    a11yLabel: 'Delete',
//    onClick: ({ event }: { event: CalendarEvent }): void => {
//      // this.events = this.events.filter(iEvent => iEvent !== event);
//      this.handleEvent('Deleted', event);
//    }
//  }
// ];
export var eventList: iMyEvent[] = [
 {
   id: 1,
   start: subDays(startOfDay(new Date()), 3),
   end: subDays(startOfDay(new Date()), 1),
   title: 'A 3 day event',
   description: 'Test description of A 3 day event',
   color: iEventColors.meeting,
  //  actions: iEventAction,
   allDay: true,
   resizable: {
     beforeStart: true,
     afterEnd: true
   },
   draggable: true
 },
 { id: 2,
   start: startOfDay(new Date()),
   title: 'An event with no end date',
   description: 'Test description of An event with no end date',
   color: iEventColors.appointmet
 },
 {
   id: 3,
   start: subDays(endOfMonth(new Date()), 3),
   end: addDays(endOfMonth(new Date()), 3),
   title: 'A long event that spans 2 months',
   description: 'Test description of A long event that spans 2 months',
   color: iEventColors.work,
   allDay: true
 },
 {
   id: 4,
   start: addHours(startOfDay(new Date()), 2),
   end: addHours(new Date(), 2),
   title: 'A draggable and resizable event',
   description: 'Test description of A draggable and resizable event',
   color: iEventColors.work,
  //  actions: iEventAction,
   resizable: {
     beforeStart: true,
     afterEnd: true
   },
   draggable: true
 }
];