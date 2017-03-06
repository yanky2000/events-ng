import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventServiceService } from './event-service.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventServiceService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
