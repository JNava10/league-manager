import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {League} from "../../../utils/interfaces/league.interface";
import {LeagueApiService} from "../../../services/api/league-api.service";
import {AsyncPipe} from "@angular/common";
import { LeagueMemberListComponent } from "../league-member-list/league-member-list.component";
import { RouterOutlet } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-league-overview',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    TabMenuModule,
    LeagueMemberListComponent,
    RouterOutlet
],
  templateUrl: './league-overview.component.html',
  styleUrl: './league-overview.component.css'
})
export class LeagueOverviewComponent {
  
}
