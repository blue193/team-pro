import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { VideosComponent } from './components/videos/videos.component';
import { ErrorComponent } from './core/error/error.component';
import { NoAccessComponent } from './core/error/no-access.component';
import { PageNotFoundComponent } from './core/error/page-not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServiceProviderComponent } from './components/pages/service-provider/service-provider.component';
import { CharityComponent } from './components/pages/charity/charity.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

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
  { path: 'about-us', pathMatch: 'full', component: AboutUsComponent }, 
  { path: 'terms', pathMatch: 'full', component: TermsComponent }, 
  { path: 'charity', pathMatch: 'full', component: CharityComponent }, 
  { path: 'contact', pathMatch: 'full', component: ContactComponent }, 
  { path: 'service-provider', pathMatch: 'full', component: ServiceProviderComponent }, 
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
