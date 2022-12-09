import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { HttpClientModule } from "@angular/common/http";
import { UserLogComponent } from './user-log/user-log.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"dash",
    component:DashboardComponent
  },
  {
    path:"reg",
    component:UserRegComponent
  },
  {
    path:"log",
    component:UserLogComponent
  },
  {
    path:"profile",
    component:ViewProfileComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    UserRegComponent,
    UserLogComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
