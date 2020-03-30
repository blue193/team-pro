import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DateSuffix } from '../../shared/_pipes/date-suffix.pipe';
import { MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

@NgModule({
  declarations: [
   CalendarComponent,
   DateSuffix
  ],
  imports: [
    CommonModule,
    FormsModule,
    // SharedModule,
  
 


    RouterModule.forChild(routes),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ]
})
export class CalendarPageModule { }
