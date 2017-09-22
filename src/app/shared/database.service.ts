import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  flowers: any[];
  flowersList: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.flowersList = db.list('/flowers');
    this.flowersList
      .subscribe(flowers => this.flowers = flowers);
  }

  addFlower(){
    
  }

}
