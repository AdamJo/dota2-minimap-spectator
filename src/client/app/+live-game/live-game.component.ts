import { Component, DoCheck } from '@angular/core';
import { ApiService } from '../services/index';
import { MapComponent } from './map/index';
import { DraftComponent } from './draft/index';

@Component({
  moduleId: module.id,
  selector: 'app-live-game',
  templateUrl: 'live-game.component.html',
  styleUrls: ['live-game.component.css'],
  directives: [
    MapComponent,
    DraftComponent
  ]
})
export class LiveGameComponent implements DoCheck {

  radiant: any;
  dire: any;
  duration: number;

  constructor(private apiService: ApiService ) {}
  ngDoCheck() {
    this.radiant = this.apiService.radiant;
    this.dire = this.apiService.dire;
    this.duration = this.apiService.duration;
  }
}
