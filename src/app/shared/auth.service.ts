import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: firebase.User = null;
  private authState: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.authState = this.afAuth.authState;
    this.authState
      .subscribe(user => {
        if (user) {
          this.currentUser = user;
        } else {
          this.currentUser = null;
        }
      });
  }

  signUpEmail(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  logInEmail(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    this.afAuth
      .auth
      .signOut();
  }

  getAuthState() {
    return this.authState;
  }

}
