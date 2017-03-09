import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event-service.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(
    private eventService: EventService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id'])
    console.log(route)
    if (!eventExist)
      this.router.navigate(['/404'])
    return eventExist

  }
}
