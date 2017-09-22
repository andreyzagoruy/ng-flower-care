import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlowersListComponent } from './dashboard/flowers-list/flowers-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlowerAddComponent } from './flower/flower-add/flower-add.component';
import { AuthService } from './shared/auth.service';
import { firebaseConfig } from './firebase-config';
import { HeadbarComponent } from './headbar/headbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FlowersComponent } from './flower/flowers/flowers.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'flowers', component: FlowersComponent },
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
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
