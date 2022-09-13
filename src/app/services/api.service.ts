import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ICommanResponseModel, IUserLoginModal } from '../models/user.model';
@Injectable()

export class ApiService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    private getEndPoint(endPoint: string): string {
        return this.baseUrl + endPoint;
    }

    userLogin(loginModel: IUserLoginModal): Observable<ICommanResponseModel<IUserLoginModal[]>> {
        return this.http.post(this.getEndPoint('/login'),
            {
                email: loginModel.email,
                password: loginModel.password
            });
    }
}
