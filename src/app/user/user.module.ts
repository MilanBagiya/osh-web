import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule
    ],
    declarations: [
        UserComponent,
        LoginComponent,
        UserDetailsComponent
    ],
    exports: [
    ]
})
export class UserModule { }
