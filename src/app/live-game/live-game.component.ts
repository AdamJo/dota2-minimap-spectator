import { Component, DoCheck, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { ApiService } from '../services/index';
import { loading } from '../assets/loading';

@Component({
  selector: 'app-live-game',
  templateUrl: 'live-game.component.html',
  styleUrls: ['./live-game.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      ),
      transition('void => *', [
        style({
          opacity: .5,
          transform: 'scale(.95)'
        }),
        animate('0.3s ease-in')
      ])
    ])
  ]
})

export class LiveGameComponent implements DoCheck {
  scoreboard: any;
  game: any;
  radiantTeamName: any;
  direTeamName: any;
  league: any;
  series: any;
  streamDeplay: any;
  loading: any;
  paused: boolean;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

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
      this.scoreboard = this.apiService.currentGame.scoreboard;
      this.direTeamName = this.apiService.currentGame.dire_team_name;
      this.radiantTeamName = this.apiService.currentGame.radiant_team_name;
      this.league = this.apiService.currentGame.league;
      this.series = this.apiService.currentGame.series;
    }
  }
}
