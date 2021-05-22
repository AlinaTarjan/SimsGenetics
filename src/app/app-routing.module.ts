import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimsComponent} from "./sims/sims.component";
import {StatisticsComponent} from "./statistics/statistics.component";

const routes: Routes = [
  {path: 'sims', component: SimsComponent},
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
