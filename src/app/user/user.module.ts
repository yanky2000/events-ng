import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule} from '@angular/common'
import { RouterModule} from '@angular/router'
import { userRoutes} from './user.routes'
import { ProfileComponent} from './profile/profile.component';
import { LoginComponent } from './login/login.component'
 
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})

export class UserModule {}