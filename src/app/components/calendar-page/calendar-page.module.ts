import { ShortTime } from './../../shared/_pipes/short-time.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DateSuffix } from '../../shared/_pipes/date-suffix.pipe';
 
const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

@NgModule({
  declarations: [
   CalendarComponent,
   DateSuffix,
   ShortTime
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ]
})
export class CalendarPageModule { }
