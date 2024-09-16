import { Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {CreateLeagueFormComponent} from "./components/league/create/create-league-form/create-league-form.component";
import {LeaguesDashboardComponent} from "./components/league/leagues-dashboard/leagues-dashboard.component";
import {LeagueMainComponent} from "./components/league/league-main/league-main.component";
import {LeagueOverviewComponent} from "./components/league/league-overview/league-overview.component";
import {CreateChampionshipComponent} from "./components/championship/create-championship/create-championship.component";
import { LeagueMemberListComponent } from './components/league/league-member-list/league-member-list.component';

export const routes: Routes = [
  { path: 'lm', children: [
      { path: 'login', component: LoginComponent },
      { path: 'new-league', component: CreateLeagueFormComponent },
      { path: 'leagues', component: LeaguesDashboardComponent, title: 'Ligas' },
      { path: 'league/:leagueId', component: LeagueMainComponent, children: [
        { path: 'overview', component: LeagueOverviewComponent },
        { path: 'members', component: LeagueMemberListComponent },
      ] 
    },
      { component: CreateChampionshipComponent, path: 'create-championship' },
    ]
  },
];
