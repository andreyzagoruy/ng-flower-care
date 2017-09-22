import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
    this.router.navigate(['/dashboard']);
  }
}
