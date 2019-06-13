import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddComponent } from './user-add/user-add.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './shared/state/reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({ users: UserReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
