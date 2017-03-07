import { Routes } from '@angular/router'
import { EventListComponent } from './events/shared/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { CreateEventComponent } from './events/shared/create-event/create-event.component';


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },

]