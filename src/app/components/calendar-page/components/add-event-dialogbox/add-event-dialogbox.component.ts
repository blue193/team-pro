import { IResponse } from './../../../../shared/_models/response.model';
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
  eventEndDate: string; 

  constructor(private apiService: ApiService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.apiService.getEventCategoryList().subscribe(response => this.eventCategoryList = response.data);
  }

  addEventBtnClick() {
    let newEventData = {
      'ParaCategoryId': this.eventCategory,
      'ParaSubject': this.eventSubject,
      'ParaDetails': this.eventDetail,
      'ParaEventStartDate': this.datePipe.transform(this.eventStartDate, 'dd/MM/yyyy HH:mm:ss'),
      'ParaEventEndDate': this.datePipe.transform(this.eventEndDate, 'dd/MM/yyyy HH:mm:ss'),
      'ParaConsumerId': '1',
    }
    this.apiService.addEvent(newEventData).subscribe((response) => {
      console.log('addEvent  response ', response);
    });
  }

}
