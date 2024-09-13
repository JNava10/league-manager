import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {League, LeagueMember} from "../../utils/interfaces/league.interface";
import {sendTokenParam} from "../../utils/constants/global.constants";
import { User } from '../../utils/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueApiService {

  constructor(private http: HttpClient) { }

}
