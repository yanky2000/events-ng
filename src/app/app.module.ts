import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/shared/event-list/event-list.component';
import { EventThumbnailComponent } from './events/shared/event-thumbnail/event-thumbnail.component';
import { EventService } from './events/shared/event-service.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { CreateEventComponent } from './events/shared/create-event/create-event.component';
import { Error404 } from './errors/errors.component';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavComponent,
    CreateEventComponent,
    Error404
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [EventService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
