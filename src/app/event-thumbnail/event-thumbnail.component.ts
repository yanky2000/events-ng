import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }

  counter = 0
  
  @Input() event
  @Output() buttonClicked = new EventEmitter ()

  handleClickMe() {
    // console.log('clicked!')
    this.buttonClicked.emit(this.counter)
  }

  showTimer() {
    console.log(this.counter)
  }
}
