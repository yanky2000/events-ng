import { Injectable } from '@angular/core';

@Injectable()
export class EventServiceService {
  
  constructor() { }
  
  getEvents() {
    return EVENTS
  }
}


const EVENTS = [{
  id: 1,
  name: "Jackson concert!!!!",
  imageUrl: "https://goo.gl/images/FDOFdB",
  location: {
    address: "Tverskaya 12",
    city: "Moscow",
    country: "Russia"
  }
}]