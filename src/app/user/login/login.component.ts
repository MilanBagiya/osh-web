import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICommanResponseModel, IUserLoginModal, LocalStorePath } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  subs: Subscription;
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService) {

    this.subs = new Subscription();
    this.signInForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.subs.add(this.apiService
        .userLogin(this.signInForm.value)
        .subscribe((response: ICommanResponseModel<IUserLoginModal[]>) => {
          if (response) {
            this.router.navigateByUrl('/dashboard');
            alert('Logged in Successfully.');
            this.authService.setLocalStorage(
              LocalStorePath.first_name,
              JSON.stringify(response.data)
            );
          }
        })
      )
    }
  }

}
