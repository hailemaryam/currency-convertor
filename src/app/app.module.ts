import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {HomeCardComponent} from "./components/home-card/home-card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailComponent} from "./components/detail/detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
