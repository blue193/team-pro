import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortTime' })
export class ShortTime implements PipeTransform {
  transform(value: string, arg1: any): string {

   let eventDate = new Date(value);
   let calendarDate = new Date(arg1);
    
   let eventDateony = eventDate.getDate()+'-'+eventDate.getMonth()+'-'+eventDate.getFullYear();
   let calendarDateonly = calendarDate.getDate()+'-'+calendarDate.getMonth()+'-'+calendarDate.getFullYear();

   // console.log(' eventDateony ', eventDateony);
   // console.log(' calendarDateonly ', calendarDateonly);

   if ( eventDateony ===  calendarDateonly) {
    let hours = eventDate.getHours();
    let minutes = eventDate.getMinutes();
    let ampm = hours >= 12 ? 'p' : 'a';
    hours = hours % 12;
    hours = hours ? hours : 12;  
    minutes = (minutes < 10) ? 0 : minutes; 
    return hours.toString() + ( (minutes>0)? (':'+minutes.toString()) :'') + ampm;
   }else{
    return;
   }
   
  
 


    

  }
}