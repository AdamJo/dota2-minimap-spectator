import { Component, DoCheck, OnInit } from '@angular/core';
import { loading } from '../../../assets/initialLoadData/loading';
import { ApiService, LiveLeagueGame, League, Series, Scoreboard } from '../../services/index';

@Component({
  selector: 'lg-match',
  templateUrl: 'match.component.html',
  styleUrls: ['match.component.css']
})

export class MatchComponent implements DoCheck {
  scoreboard: Scoreboard;
  radiantTeamName: string;
  direTeamName: string;
  league: League;
  series: Series;
  streamDelay: number;
  loading: boolean;
  paused: boolean;

  constructor(public apiService: ApiService) {
    this.loading = false;
    this.scoreboard = loading.scoreboard;
    this.direTeamName = loading.dire_team_name;
    this.radiantTeamName = loading.radiant_team_name;
    this.league = loading.league;
    this.series = loading.series;
    this.streamDelay = loading.stream_delay_s;
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
      this.streamDelay = this.apiService.currentGame.stream_delay_s;
    }
  }

  ngOnInit() {
    this.apiService.gamePaused = false;
  }
}