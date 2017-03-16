/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventsResolverService } from './events-resolver.service';

describe('EventsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsResolverService]
    });
  });

  it('should ...', inject([EventsResolverService], (service: EventsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
