import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { CommonModule } from '@angular/common';
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
 
// pipes
import { TruncatePipe } from './shared/_pipes/str-limit.pipe';
import { AsFormArrayPipe } from './shared/_pipes/form-array.pipe';
import { CalendarDialogboxComponent } from './components/calendar-page/components/calendar-dialogbox/calendar-dialogbox.component'; 

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
    ReactiveFormsModule,
    OwlModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' }),
    SlickCarouselModule,
    MatSelectModule
  ],
  entryComponents: [
    ServiceDialogBoxComponent,
    VideoDialogboxComponent,
    CalendarDialogboxComponent
  ],
  declarations: [
    AppComponent, 
    LandingComponent, 
    ServiceDialogBoxComponent, 
    VideosComponent, 
    TruncatePipe,
    AsFormArrayPipe,
    CalendarDialogboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
