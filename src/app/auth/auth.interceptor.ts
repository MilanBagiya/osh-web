import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DEFAULT_AUTHORIZATION_ERROR_MESSAGE, DEFAULT_ERROR_MESSAGE } from '../models/message.model';
import { LocalStorePath } from '../models/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request.clone())
            .pipe(
                tap((success: any) => {
                    if (success.Status === false) {
                        console.error(success.Message);
                    }
                }, (error: any) => {
                    if (error.status === 401 || error.status === 403) {
                        localStorage.clear();
                        this.router.navigate(['/']);
                        alert(DEFAULT_AUTHORIZATION_ERROR_MESSAGE);
                    } else {
                        alert(error.error?.message || DEFAULT_ERROR_MESSAGE);
                    }
                })
            );
    }
}