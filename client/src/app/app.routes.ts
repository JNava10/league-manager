import { Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {CreateLeagueFormComponent} from "./components/league/create/create-league-form/create-league-form.component";
import {LeaguesDashboardComponent} from "./components/league/leagues-dashboard/leagues-dashboard.component";
import {LeagueMainComponent} from "./components/league/league-main/league-main.component";
import {LeagueOverviewComponent} from "./components/league/league-overview/league-overview.component";

export const routes: Routes = [

  { path: 'lm', children: [
      { path: 'login', component: LoginComponent },
      { path: 'new-league', component: CreateLeagueFormComponent },
      { path: 'leagues', component: LeaguesDashboardComponent },
      {path: 'league', children: [
          { path: ':leagueId', component: LeagueMainComponent, children: [
              { component: LeagueOverviewComponent, path: '' }
            ]
          }
        ]
      },
    ]
  },
];
