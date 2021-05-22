import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Sim} from "../models/sim";

@Component({
  selector: 'app-sims',
  templateUrl: './sims.component.html',
  styleUrls: ['./sims.component.css']
})
export class SimsComponent implements OnInit {
  sims: Array<Sim> = [];
  @Output() simsToDisplay = new EventEmitter<Array<Sim>>();
  jsonSourceArray: Array<string> = ['Аврора Скайс', 'Исла Парадисо'];
  jsonSource: string = 'assets/AuroraSkyes.json';
  currentSource: string = 'Аврора Скайс';
  constructor() { }

  ngOnInit(): void {
    fetch(this.jsonSource)
      .then(response => response.json())
      .then((response) => this.sims = response);
  }

  findSimByName(name: string | undefined): Sim {
      return <Sim>this.sims.find(sim => sim.firstName === name);
  }

  changejsonSource(source: string): void {
    if (source === 'Аврора Скайс') {
      this.jsonSource = 'assets/AuroraSkyes.json';
      this.currentSource = 'Аврора Скайс';
    } else if (source === 'Исла Парадисо') {
      this.jsonSource = 'assets/IslaParadiso.json';
      this.currentSource = 'Исла Парадисо';
    }
    this.ngOnInit()
  }

  displaySims(value: Array<Sim>) {
    this.simsToDisplay.emit(value);
  }

}
