import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/_services/api.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'xb-add-event-dialogbox',
  templateUrl: './add-event-dialogbox.component.html',
  styleUrls: ['./add-event-dialogbox.component.scss']
})
export class AddEventDialogboxComponent implements OnInit {
  eventCategoryList: any; 

  eventSubject: string; 
  eventCategory: number; 
  eventDetail: string; 
  eventStartDate: Date; 
  eventStartHours: number; 
  eventStartMinutes: number; 
  eventStartSeconds: number; 

  eventEndDate: Date; 
  eventEndHours: number; 
  eventEndMinutes: number; 
  eventEndSeconds: number; 

  eventProcessing: boolean = false; 
  apiMessage: string; 
  

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogboxComponent>,
    private apiService: ApiService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.apiService.getEventCategoryList().subscribe(response => this.eventCategoryList = response.data);
  }

  addEventBtnClick() {
    const startDate = this.eventStartDate.toDateString() +' '+ this.eventStartHours+':'+this.eventStartMinutes+':'+this.eventStartSeconds;
    const endDate = this.eventEndDate.toDateString() +' '+ this.eventEndHours+':'+this.eventEndMinutes+':'+this.eventEndSeconds;
    let newEventData = {
      'ParaCategoryId': this.eventCategory,
      'ParaSubject': this.eventSubject,
      'ParaDetails': this.eventDetail,
      'ParaEventStartDate': this.datePipe.transform(startDate, 'MM/dd/yyyy HH:mm:ss'),
      'ParaEventEndDate': this.datePipe.transform(endDate, 'MM/dd/yyyy HH:mm:ss'),
      'ParaConsumerId': '1',
    }
    this.eventProcessing = true; 
    this.apiService.addEvent(newEventData).subscribe((response) => {
      this.eventProcessing = false; 
      if(response.status == 200 && response.message == 'Success'){
        this.apiMessage = 'Event Succesfully Added.';
        setTimeout(()=>{  this.dialogRef.close(true); }, 2000);
      }else{
        this.apiMessage = response.message;
      }
    });
  }

}
