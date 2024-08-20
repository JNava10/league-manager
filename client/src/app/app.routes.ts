import { Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";

export const routes: Routes = [

  { path: 'leagues', component: LoginComponent, children: [
      { path: 'login', component: LoginComponent },
    ] },
];
