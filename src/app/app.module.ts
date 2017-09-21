import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlowersListComponent } from './dashboard/flowers-list/flowers-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlowerAddComponent } from './flower/flower-add/flower-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowersListComponent,
    NavbarComponent,
    FlowerAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
