import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'mobile': new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      'password': new FormControl(null, [Validators.required ]),
    });
  }

  login() {
    const email = this.loginForm.get('mobile').value + '@admin.com';
      this.authService.login(email, this.loginForm.get('password').value);
  }
}
