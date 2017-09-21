import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { FlowersListComponent } from './dashboard/flowers-list/flowers-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlowerAddComponent } from './flower/flower-add/flower-add.component';
import { firebaseConfig } from './firebase-config';

@NgModule({
  declarations: [
    AppComponent,
    FlowersListComponent,
    NavbarComponent,
    FlowerAddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
