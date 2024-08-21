import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoggedData, LoginData} from "../../utils/interfaces/auth.interface";
import {environment} from "../../../environments/environment.development";
import {catchError, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http: HttpClient) { }

  login = (loginData: LoginData) => {
    return this.http.post<LoggedData>(`${environment.apiEndpoint}/auth/login`, loginData).pipe(
      catchError((res: HttpErrorResponse) => {
        const error = res.error as LoggedData;

        return of(error);
      })
    )
  }
}
