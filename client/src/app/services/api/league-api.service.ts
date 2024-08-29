import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoggedData, LoginData} from "../../utils/interfaces/auth.interface";
import {environment} from "../../../environments/environment.development";
import {catchError, of} from "rxjs";
import {League} from "../../utils/interfaces/league.interface";
import {sendTokenParam} from "../../utils/constants/global.constants";
import {ResError} from "../../utils/interfaces/response.interface";

@Injectable({
  providedIn: 'root'
})
export class LeagueApiService {

  constructor(private http: HttpClient) { }

  createLeague = (league: League) => {
    return this.http.post<League>(`${environment.apiEndpoint}/league`, league, {params: {...sendTokenParam}})
  }

  getOwnLeagues = () => {
    return this.http.get<League[]>(`${environment.apiEndpoint}/league/owned`, {params: {...sendTokenParam}})
  }

  getLeague = (id: number) => {
    return this.http.get<League>(`${environment.apiEndpoint}/league/${id}`, {params: {...sendTokenParam}})
  }
}
