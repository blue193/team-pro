import { AddEventDialogboxComponent } from './../add-event-dialogbox/add-event-dialogbox.component';
import { iMyEvent, iEventColors } from './../../../../shared/_models/event.model';
import { CalendarDialogboxComponent } from './../calendar-dialogbox/calendar-dialogbox.component';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarDateFormatter
} from 'angular-calendar';
import { CustomDateFormatter } from './provider/custom-date-formatter.provider';
import { ApiService } from 'src/app/shared/_services/api.service';
import { User } from 'src/app/shared/_models/user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'xb-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})

export class CalendarComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    event: CalendarEvent;
  };
  refresh: Subject<any> = new Subject();
  allEventList: iMyEvent[] = [];
  todayEvents: iMyEvent[] = [];
  activeDayIsOpen: boolean = false;
  users: User[];
  viewAll: boolean = true; 

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getAllCalendarEvents().subscribe(response => {
      this.allEventList = response; 
      this.todayEvents = response;
    });
    this.apiService.getAllUsers().subscribe(response => this.users = response);
  }

  // when click on calendar date cell, show this date and its events on left side view.  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.todayEvents = events;
    this.viewDate = date;
  }

  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd
  // }: CalendarEventTimesChangedEvent): void {
  //   this.events = this.events.map(iEvent => {
  //     if (iEvent === event) {
  //       return {
  //         ...event,
  //         start: newStart,
  //         end: newEnd
  //       };
  //     }
  //     return iEvent;
  //   });
  //   this.handleEvent('Dropped or resized', event);
  // }

  // click on any event triggered a popup which show information of event, and allowed update on event detail. 
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event };
    this.dialog.open(CalendarDialogboxComponent, { data: event });
  }

  // addEvent(): void {
  //   this.events = [
  //     ...this.events,
  //     {
  //       title: 'New event',
  //       description: 'Description of New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //       color: iEventColors.meeting,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true
  //       }
  //     }
  //   ];
  // }

  
  deleteEvent(eventToDelete: CalendarEvent) {
    //console.log(' deleteEvent');
    // this.events = this.events.filter(event => event !== eventToDelete);
  }

  // chagne the view of calendar(Month, Week, Day)
  setView(view: CalendarView) {
    this.view = view;
  }

  editEvent(event, option) {
    this.apiService.editEvent(event);
  }

  // show dialog box to add new events. 
  addNewEventClick(){
    this.dialog.open(AddEventDialogboxComponent);
  }

  // showng all Events on left side. 
  viewAllClick(){
    this.todayEvents = this.allEventList;
    this.viewAll = true; 
  }

  // only show today event on left side. 
  viewToday(){
    this.todayEvents = this.allEventList.filter(iEvent =>  iEvent.start.toDateString() == new Date().toDateString());
    this.viewAll = false; 
  }

}
