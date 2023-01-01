import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home-page/home.component";
import {HomeCardComponent} from "./components/home-page/home-card/home-card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AddHeaderInterceptor} from "./api/interceptors/add-header-interceptor.service";
import {DetailComponent} from "./components/detail-page/detail.component";
import { NgChartsModule } from 'ng2-charts';
import { DetailGraphComponent } from './components/detail-page/detail-graph/detail-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCardComponent,
    DetailComponent,
    DetailGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
