import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { VideosComponent } from './components/videos/videos.component';
import { ErrorComponent } from './core/error/error.component';
import { NoAccessComponent } from './core/error/no-access.component';
import { PageNotFoundComponent } from './core/error/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'videos', pathMatch: 'full', component: VideosComponent },
  { path: 'xpb', pathMatch: 'full', component: LandingComponent },
  { path: 'error', component: ErrorComponent },
  { path: '401', pathMatch: 'full', component: NoAccessComponent }, // NO ACCESS
  { path: '404', pathMatch: 'full', component: PageNotFoundComponent }, // NOT FOUND
  {
    path: 'category',
    loadChildren: './components/category/category.module#CategoryModule'
  },
  {
    path: 'calendar',
    loadChildren: './components/calendar-page/calendar-page.module#CalendarPageModule' 
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
