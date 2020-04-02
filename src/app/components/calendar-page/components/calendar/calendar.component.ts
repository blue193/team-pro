import { DatePipe } from '@angular/common';
import { AddEventDialogboxComponent } from './../add-event-dialogbox/add-event-dialogbox.component';
import { cCalendarEvent } from './../../../../shared/_models/event.model';
import { CalendarDialogboxComponent } from './../calendar-dialogbox/calendar-dialogbox.component';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, startOfMonth, startOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarDateFormatter,
  CalendarMonthViewDay
} from 'angular-calendar';
import { CustomDateFormatter } from './provider/custom-date-formatter.provider';
import { ApiService } from 'src/app/shared/_services/api.service';
import { User } from 'src/app/shared/_models/user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { endOfWeek } from 'date-fns/esm';

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
  modalData: { event: CalendarEvent; }; 
  allEventList: cCalendarEvent[] = [];
  todayEvents: CalendarEvent[] = [];
  activeDayIsOpen: boolean = false;
  users: User[];
  viewAll: boolean = true; 

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getAllEvents();
    this.apiService.getAllUsers().subscribe(response => this.users = response);
  }

  // when click on calendar date cell, show this date and its events on left side view.  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {    
    this.todayEvents = events;
    this.viewDate = date;
  }

  // click on any event triggered a popup which show information of event, and allowed update on event detail. 
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event };
    this.dialog.open(CalendarDialogboxComponent, { data: event }).afterClosed().subscribe(result =>   {
      if (result){ this.getAllEvents(); }
    });
  }

  // get a list off all event on base of range. 
  getAllEvents(){
    let dateRange = this.getDateRange();
    this.apiService.getAllCalendarEvents(dateRange).subscribe(response => {
      let eventList: cCalendarEvent[] = [];
      if (response.data.length > 0) {
        eventList = response.data.map(data => new cCalendarEvent(data));
      }
      this.allEventList = eventList; 
      this.todayEvents = eventList;
    });
  }
  
  deleteEvent(eventToDelete: CalendarEvent) {
    // console.log(' deleteEvent');
    // this.events = this.events.filter(event => event !== eventToDelete);
  }

  // chagne the view of calendar(Month, Week, Day)
  setView(view: CalendarView) {
    this.view = view;
    this.getAllEvents();
  }

  editEvent(event, option) {
    this.apiService.editEvent(event);
  }

  // show dialog box to add new events. 
  addNewEventClick(){
    this.dialog.open(AddEventDialogboxComponent).afterClosed().subscribe(result =>   {
      if (result){ this.getAllEvents(); }
    });
  }

  // showng all Events on left side. 
  viewAllClick(){
    this.todayEvents = this.allEventList;
    this.viewAll = true; 
  }

  // function to get the start and end date range on base of calendar view showng 
  // if month then get from 1st of month to end of month. 
  // if week then range will be one week 
  getDateRange(){
    let startRange = new Date();
    let endRange = new Date();
    if (this.view == 'month'){
      startRange = startOfMonth(this.viewDate);
      endRange = endOfMonth(this.viewDate);  
    }else if( this.view == 'week'){
      startRange = startOfWeek(this.viewDate);
      endRange = endOfWeek(this.viewDate);
    }else{
      startRange = startOfDay(this.viewDate);  
      endRange = endOfDay(this.viewDate);
    }
    return {
      'ParaFromDate':  this.datePipe.transform(startRange, 'MM/dd/yyyy'),
      'ParaToDate':  this.datePipe.transform( endRange, 'MM/dd/yyyy'),
    }
  }

  
}
