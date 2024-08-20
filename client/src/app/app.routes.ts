import { Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {CreateLeagueFormComponent} from "./components/league/create/create-league-form/create-league-form.component";

export const routes: Routes = [

  { path: 'leagues', children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard', component: CreateLeagueFormComponent
      },
    ] },
];
