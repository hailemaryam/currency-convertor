import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home-page/home.component";
import {DetailComponent} from "./components/detail-page/detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
