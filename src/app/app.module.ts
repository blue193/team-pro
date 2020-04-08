
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTabsModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module'; 

import { appRoutes } from './app-routing';
import { NgModule } from '@angular/core';

//  modules 
import { OwlModule } from 'ngx-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// material module 
import { MatSelectModule } from '@angular/material/select';

// components 
import { LandingComponent } from './components/landing/landing.component';
import { ServiceDialogBoxComponent } from './components/landing/servicedialogbox/servicedialogbox.component';
import { VideoDialogboxComponent } from './core/video/video-dialogbox/video-dialogbox.component';
import { VideosComponent } from './components/videos/videos.component';
import { CalendarDialogboxComponent } from './components/calendar-page/components/calendar-dialogbox/calendar-dialogbox.component'; 
import { AddEventDialogboxComponent } from './components/calendar-page/components/add-event-dialogbox/add-event-dialogbox.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CharityComponent } from './components/pages/charity/charity.component';
import { ServiceProviderComponent } from './components/pages/service-provider/service-provider.component';
import { ContactComponent } from './components/pages/contact/contact.component';

// pipes
import { TruncatePipe } from './shared/_pipes/str-limit.pipe';
import { AsFormArrayPipe } from './shared/_pipes/form-array.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CookieModule.forRoot(),
    CoreModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    OwlModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' }),
    SlickCarouselModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  entryComponents: [
    ServiceDialogBoxComponent,
    VideoDialogboxComponent,
    CalendarDialogboxComponent,
    AddEventDialogboxComponent
  ],
  declarations: [
    AppComponent, 
    LandingComponent, 
    ServiceDialogBoxComponent, 
    VideosComponent, 
    TruncatePipe,
    AsFormArrayPipe,
    CalendarDialogboxComponent,
    AddEventDialogboxComponent,
    AboutUsComponent,
    TermsComponent,
    CharityComponent,
    ServiceProviderComponent,
    ContactComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
