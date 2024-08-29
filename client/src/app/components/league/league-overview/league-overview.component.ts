import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {League} from "../../../utils/interfaces/league.interface";
import {LeagueApiService} from "../../../services/api/league-api.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-league-overview',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './league-overview.component.html',
  styleUrl: './league-overview.component.css'
})
export class LeagueOverviewComponent implements OnInit {
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
