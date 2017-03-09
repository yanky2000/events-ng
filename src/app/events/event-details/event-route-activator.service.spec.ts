/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventRouteActivatorService } from './event-route-activator.service';

describe('EventRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteActivatorService]
    });
  });

  it('should ...', inject([EventRouteActivatorService], (service: EventRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
