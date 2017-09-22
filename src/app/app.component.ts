import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user = null;

  constructor(private db: AngularFireDatabase, public auth: AuthService) {
        
  }

  ngOnInit() {
    this.auth.getAuthState()
      .subscribe(
        (user) => this.user = user);
  }

}
