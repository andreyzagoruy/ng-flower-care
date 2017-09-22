import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {

  @Input() name;
  @Input() isLoggedIn;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }

}
