import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlowersListComponent } from './dashboard/flowers-list/flowers-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlowerAddComponent } from './flower/flower-add/flower-add.component';
import { AuthService } from './shared/auth.service';
import { DatabaseService } from './shared/database.service';
import { firebaseConfig } from './firebase-config';
import { HeadbarComponent } from './headbar/headbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FlowersComponent } from './flower/flowers/flowers.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'flowers', component: FlowersComponent },
  { path: 'flowers/add', component: FlowerAddComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FlowersListComponent,
    NavbarComponent,
    FlowerAddComponent,
    HeadbarComponent,
    LoginComponent,
    DashboardComponent,
    FlowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
