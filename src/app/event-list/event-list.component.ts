import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event = {
    id: 1,
    name: "Jackson concert",
    imageUrl: "https://goo.gl/images/FDOFdB",
    location: {
      address: "Tverskaya 12",
      city: "Moscow",
      country: "Russia"
    }

  }

}
