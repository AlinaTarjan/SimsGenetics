import { Component} from '@angular/core';
import {SimsComponent} from "./sims/sims.component";
import {Sim} from "./models/sim";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimsGenetics';
  displayedSims: Array<Sim> = [];

  addSims(sims: Array<Sim>) {
    this.displayedSims = sims;
  }
}
