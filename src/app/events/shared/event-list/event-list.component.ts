import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service.service';
import { ToastrService } from '../../../common/toastr.service';

@Component({

  // dont need selector as navigating via router
  // selector: 'app-event-list',


  templateUrl: './event-list.component.html',
  // templateUrl: `  
  styleUrls: ['./event-list.component.css']
})


export class EventListComponent implements OnInit {
  events: any
  constructor(
    private eventService: EventService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

// Code for testing data transmitting from child to parent comp
  currentCounter
  handleEventClicked(event) {
    this.currentCounter = event
  }

  eventToastr(name) {
    this.toastr.success(name)
  }

}
