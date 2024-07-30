import { Component } from '@angular/core';
import {TuiInputModule, TuiInputPasswordModule, TuiUnmaskHandlerModule} from "@taiga-ui/kit";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {passwordRegex} from "../../../utils/regex.constants";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Button} from "primeng/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    ToggleButtonModule,
    FormsModule,
    Button,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiHintModule,
    TuiButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    nickOrEmail: new FormControl(''),
    password: new FormControl(''),
  });
}
