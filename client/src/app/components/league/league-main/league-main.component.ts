import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {League} from "../../../utils/interfaces/league.interface";
import {LeagueApiService} from "../../../services/api/league-api.service";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-league-main',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './league-main.component.html',
  styleUrl: './league-main.component.css'
})
export class LeagueMainComponent implements OnInit {
  league$!: Observable<League>;
  leagueId?: number

  constructor(private leagueService: LeagueApiService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      const id = params.get("leagueId");
      this.leagueId = Number(id) ?? null;
    })

    if (this.leagueId) {
      this.league$ = this.leagueService.getLeague(this.leagueId)
    }
  }
}
