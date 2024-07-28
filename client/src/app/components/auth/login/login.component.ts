import { Component } from '@angular/core';
import {TuiInputModule, TuiUnmaskHandlerModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    TuiUnmaskHandlerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
