import { ProfileComponent } from './profile/profile.component'
import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'

export const userRoutes:Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]