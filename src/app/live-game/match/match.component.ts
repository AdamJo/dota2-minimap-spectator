import { Component, DoCheck, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { loading } from '../../assets/loading';
import { ApiService } from '../../services/index';

@Component({
  selector: 'app-match',
  templateUrl: 'match.component.html',
  styleUrls: ['match.component.scss']
})

export class MatchComponent implements DoCheck {
  scoreboard: any;
  game: any;
  radiantTeamName: any;
  direTeamName: any;
  league: any;
  series: any;
  streamDeplay: any;
  loading: any;
  paused: boolean;

  constructor(public apiService: ApiService) {
    this.loading = false;
    this.scoreboard = loading.scoreboard;
    this.direTeamName = loading.dire_team_name;
    this.radiantTeamName = loading.radiant_team_name;
    this.league = loading.league;
    this.series = loading.series;
    this.streamDeplay = loading.stream_delay_s;
  }

  ngDoCheck() {
    if (this.apiService.currentGame) {
      this.paused = this.apiService.gamePaused;      
      this.loading = this.apiService.loadDone;
      this.scoreboard = this.apiService.currentGame.scoreboard;
      this.direTeamName = this.apiService.currentGame.dire_team_name;
      this.radiantTeamName = this.apiService.currentGame.radiant_team_name;
      this.league = this.apiService.currentGame.league;
      this.series = this.apiService.currentGame.series;
      this.streamDeplay = this.apiService.currentGame.stream_delay_s;
    }
  }
}