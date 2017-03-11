import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // setInterval(() => {this.counter++}, 1000)
  }

  counter = 0
  
  @Input() event // Gets event variable from params in parent html tag.
  
  // Code for testing transmitting data(counter) to parent component
  @Output() buttonClicked = new EventEmitter ()
  handleClickMe() {
    this.buttonClicked.emit(this.counter)
  }

  showTimer() {
    console.log(this.counter)
  }
}
