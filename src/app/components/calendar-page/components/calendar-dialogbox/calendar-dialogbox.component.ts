import { ApiService } from 'src/app/shared/_services/api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { cCalendarEvent } from './../../../../shared/_models/event.model';

@Component({
  selector: 'xb-calendar-dialogbox',
  templateUrl: './calendar-dialogbox.component.html',
  styleUrls: ['./calendar-dialogbox.component.scss']
})

export class CalendarDialogboxComponent implements OnInit {
  deletingEvent: boolean = false; 
  apiMessage: string = ''; 

  constructor(
    public dialogRef: MatDialogRef<CalendarDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public event,
    private apiService: ApiService) { }

  ngOnInit() { }

  updateEvent(event: cCalendarEvent, selectedOption){
      this.apiService.updateEventStatus(event.id,selectedOption.value).subscribe(response =>  {
        if(response.status == 200){
          this.apiMessage = 'Event Status Updated Succesfully';
          setTimeout(()=>{  this.dialogRef.close(true); }, 2000);
        }else{
          this.apiMessage = response.message;
        }
      });
  }

  deleteEvent(event: cCalendarEvent){
    this.deletingEvent = true; 
    this.apiService.deleteEvent(event.id).subscribe(response =>  {
      this.deletingEvent = false; 
      this.apiMessage = response.message;
      if(response.status == 200){
        this.event = null;
        this.apiMessage = 'Event Succesfully Deleted';
        setTimeout(()=>{  this.dialogRef.close(true); }, 2000);
      }else{
        this.apiMessage = response.message;
      }
    });

  }

}
