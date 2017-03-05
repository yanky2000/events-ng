import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  // templateUrl: './event-list.component.html',
  template: `
    <div>
      <div>
        {{currentCounter}}
      </div>
      <app-event-thumbnail #thumbnail (buttonClicked)="handleEventClicked($event)" [event]="event1" ></app-event-thumbnail>

     ` <button type="button" class="btn btn-default" (click)="thumbnail.showTimer()">Show counter in console</button>

    </div>  
  `,
  styleUrls: ['./event-list.component.css']
})


export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event1 = {
    id: 1,
    name: "Jackson concert",
    imageUrl: "https://goo.gl/images/FDOFdB",
    location: {
      address: "Tverskaya 12",
      city: "Moscow",
      country: "Russia"
    }
  }

  currentCounter

  handleEventClicked(event) {
    this.currentCounter = event
  }

}
