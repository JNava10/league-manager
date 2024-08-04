import { Component } from '@angular/core';
import {TuiInputModule, TuiInputPasswordModule, TuiUnmaskHandlerModule} from "@taiga-ui/kit";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {passwordRegex} from "../../../utils/constants/regex.constants";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Button} from "primeng/button";
import {ModeSwitchComponent} from "../../utils/mode-switch/mode-switch.component";
import {CustomValidators} from "../../../utils/custom.validators";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {LoggedData, LoginData} from "../../../utils/interfaces/auth.interface";
import {GlobalHelper} from "../../../helpers/global.helper";

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
    TuiButtonModule,
    ModeSwitchComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private globalHelper: GlobalHelper,
  ) {}

  loginForm = new FormGroup({
    nickOrEmail: new FormControl('', [Validators.required, CustomValidators.nickOrEmail()]),
    password: new FormControl('', [Validators.required, Validators.pattern(passwordRegex)]),
  }, {updateOn: 'submit'});

  get password() {
    return this.loginForm.get('password')!;
  }

  get nickOrEmail() {
    return this.loginForm.get('nickOrEmail')!;
  }

  handleSubmit = () => {
    if (this.loginForm.invalid) return;

    const {password, nickOrEmail} = this.loginForm.value;
    const data: LoginData = {password: password!};

    if (nickOrEmail && nickOrEmail.includes("@")) {
      data.email = nickOrEmail!;
    } else {
      data.username = nickOrEmail!;
    }

    this.authService.login(data)
      .subscribe(loginData => this.handleLogin(loginData))
  };

  private handleLogin = (loggedData: LoggedData) => {
    console.log(loggedData);
    if (loggedData.success && loggedData.token) {
      this.globalHelper.saveToken(loggedData.token);
    }
  }
}
