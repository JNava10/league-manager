import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {IsMemberAdded, League, LeagueMember, NewMemberData} from "../../utils/interfaces/league.interface";
import {sendTokenParam} from "../../utils/constants/global.constants";
import { User } from '../../utils/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueApiService {

  constructor(private http: HttpClient) { }

  createLeague = (league: League) => {
    return this.http.post<League>(`${environment.apiEndpoint}/league`, league, {params: {...sendTokenParam}})
  }

  addMemberToLeague = (newMemberData: NewMemberData) => {
    return this.http.post<IsMemberAdded>(`${environment.apiEndpoint}/league/${newMemberData.leagueId}/member`, newMemberData, {params: {...sendTokenParam}})
  }

  getOwnLeagues = () => {
    return this.http.get<League[]>(`${environment.apiEndpoint}/league/owned`, {params: {...sendTokenParam}})
  }

  getLeague = (id: number) => {
    return this.http.get<League>(`${environment.apiEndpoint}/league/${id}`, {params: {...sendTokenParam}})
  }

  getLeagueMembers = (leagueId: number) => {
    return this.http.get<LeagueMember[]>(`${environment.apiEndpoint}/league/${leagueId}/members`, {params: {...sendTokenParam}})
  }

  searchNotMembers = (leagueId: number, search: string) => {
    return this.http.get<User[]>(`${environment.apiEndpoint}/league/${leagueId}/not-members`, {params: {...sendTokenParam, search}})
  }
}
