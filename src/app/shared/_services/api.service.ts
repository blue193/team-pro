import { environment } from './../../../environments/environment';
import { IResponse } from './../_models/response.model';
import { eventList } from './../_models/event.model';
import { User } from 'src/app/shared/_models/user.model';
import { UserMockData } from './../_models/user.model';
import { Category, categoriesMockData, Categories, categoryHomeServicesData } from './../_models/category.model';
import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { timer } from 'rxjs';
import { delay, tap } from "rxjs/operators";
import { Service, servicesData } from '../_models/service.model';
import { Item, itemsData } from '../_models/item.model';
import { categoryData, CategoryMockData } from '../_models/category-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public projectCounterBS: BehaviorSubject<{ newpost: number, inprogress: number, complete: number }> = new BehaviorSubject<{ newpost: number, inprogress: number, complete: number }>({ newpost: 0, inprogress: 0, complete: 0 });
  private projectCounter_init = false;

  constructor(private _http: HttpClient) { }

  // Get list of catgories from api backend. 
  getAllCategories() {
    let categoryList: Categories = categoriesMockData; 
    return of(categoryList);
  }

  getCategory(catid: number) {
    let categoryList: Category[] = categoriesMockData;
    return of(categoryList.find(x => x.id === catid));
  }

  getSubCategoryBySlug(categorySlug: string) {
    let categoryList: Category[] = categoryHomeServicesData;
    return of(categoryList.find(x => x.slug === categorySlug));
  }

  getTrendingProjects() {
    if (!this.projectCounter_init) {
      const source = timer(1000, 2000);
      source.subscribe(val => {
        let rand = Math.floor((Math.random() * 1000000) + val);
        let rand2 = Math.floor((Math.random() * 1002900) + val);
        let rand3 = Math.floor((Math.random() * 1004070) + val);
        let projCounters = { newpost: rand, inprogress: rand2, complete: rand3 };
        this.projectCounterBS.next(projCounters);
      });
    }
    return this.projectCounterBS;
  }

  getAllUsers() {
    var users: User[] = UserMockData;
    console.log(' users ', users);
    return of(users);
  }

  getAllServices() {
    var services: Service[] = servicesData;
    console.log(' services ', services);
    return of(services);
  }

  getAllItems() {
    var items: Item[] = itemsData;
    console.log(' items ', items);
    return of(items);
  }

  getCategoriesData() {
    var categoriesData: categoryData = CategoryMockData;
    console.log(' catsData ', categoriesData);
    return of(categoriesData);
  }

  editEvent(eventdata) {
    console.log('eventdata', eventdata);
    return eventdata;
  }

  // function to update the event status 
  // return updated eventData, and progress status 
  updateEventStatus(eventData, eventStatus) {
    return of(true).pipe(delay(1000));
  }

  // function to get all calendar event from api. 
  getAllCalendarEvents() {
    return of(eventList);
  }

  getEventCategoryList() {
      return this._http.get<IResponse<any>>(`${environment.apiUrl}/CalendarEvents/GetCategoryList`)
          .pipe(
              tap((response) => { if (response.status !== 200) { console.warn(`getEventCategoryList()) failed!`); } })
          );
  }

  addEvent(eventdata) {
    console.log('eventdata', eventdata);
    return this._http.post<IResponse<any>>(`${environment.apiUrl}/CalendarEvents/AddEvent`, eventdata)
    .pipe(
        tap((response) => { if (response.status !== 200) { console.warn(`addEvent()) failed!`); } })
    );
  }

}
