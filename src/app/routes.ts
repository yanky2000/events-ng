import { Routes } from '@angular/router'
import { EventListComponent } from './events/shared/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/shared/create-event/create-event.component';
import { Error404 } from './errors/errors.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['checkDirtyState'] },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: Error404 },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    

]
