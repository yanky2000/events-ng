import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/RX';

@Injectable()
export class EventService {
  constructor() { }


  getEvents() {
    let subject = new Subject()
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100)
    return subject
  }


  getEvent(id: number) {
    return EVENTS.find(event => event.id === id)
  }

  saveEvent(event) {
    console.log('added event')
    EVENTS.push(event)

  }
}


const EVENTS = [
  {
    id: 1,
    name: "Jackson concert!!!!",
    imageUrl: "../assets/images/musical-event.jpeg",
    date: "2017-03-07T09:05:42.618Z",
    location: {
      address: "Tverskaya 12",
      city: "Moscow",
      country: "Russia"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus atque, totam facilis quisquam voluptatum fugiat consectetur quia sint laboriosam ab, nostrum, veniam neque assumenda officia nulla possimus porro obcaecati. Et!"
  },
  {
    id: 2,
    name: "Olive",
    imageUrl: "../assets/images/mass-choir-event-53.jpeg",
    date: "2017-03-12T10:00:00.618Z",
    location: {
      address: "Tverskaya 212",
      city: "Moscow",
      country: "Russia"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus atque, totam facilis quisquam voluptatum fugiat consectetur quia sint laboriosam ab, nostrum, veniam neque assumenda officia nulla possimus porro obcaecati. Et!"
  },
  {
    id: 3,
    name: "Presley concert",
    date: "2017-03-08T12:00:42.618Z",
    imageUrl: "../assets/images/fundraiser.jpeg",
    location: {
      address: "Tverskaya 2",
      city: "Moscow",
      country: "Russia"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus atque, totam facilis quisquam voluptatum fugiat consectetur quia sint laboriosam ab, nostrum, veniam neque assumenda officia nulla possimus porro obcaecati. Et!"
  }


]