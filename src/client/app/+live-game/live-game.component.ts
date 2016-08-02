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

  scoreboard: any;
  game: any;
  radiantTeamName: any;
  direTeamName: any;
  league: any;

  constructor(private apiService: ApiService ) {}

  ngDoCheck() {
    if (this.apiService.currentGame) {
      this.scoreboard = this.apiService.currentGame.scoreboard;
      this.direTeamName = this.apiService.currentGame.dire_team_name;
      this.radiantTeamName = this.apiService.currentGame.radiant_team_name;
      this.league = this.apiService.currentGame.league;
      this.scoreboard.duration = 60; // testing
    }
  }
}
