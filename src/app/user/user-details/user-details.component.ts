import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILoginResponseModal } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  
  userDetails?: ILoginResponseModal;
  subs: Subscription = new Subscription()

  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.userDetails = this.authService.getUserDetails();
  }

  ngOnDestroy () {}
}
