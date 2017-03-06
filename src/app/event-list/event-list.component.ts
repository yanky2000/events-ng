import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-event-list',
  // templateUrl: './event-list.component.html',
  template: `
    <div>
      <div>
        {{currentCounter}}
      </div>
      <span *ngFor="let event of events">
        <app-event-thumbnail #thumbnail (buttonClicked)="handleEventClicked($event)" [event]="event" ></app-event-thumbnail>
      </span>
      <button type="button" class="btn btn-default" (click)="thumbnail.showTimer()">Show counter in console</button>

    </div>  
  `,
  styleUrls: ['./event-list.component.css']
})


export class EventListComponent implements OnInit {
  events: any
  constructor(private eventService: EventServiceService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents()
    console.log(this.events)
  }

  currentCounter

  handleEventClicked(event) {
    this.currentCounter = event
  }

}
