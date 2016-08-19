import { Component, DoCheck, HostListener, ViewChild, ElementRef, Renderer,
  // Output,
  // EventEmitter
} from '@angular/core';
import { ApiService } from '../services/index';
import { MapComponent } from './map/index';
import { DraftComponent } from './draft/index';
import { ScoreboardComponent } from './scoreboard/index';
import { TeamInfoComponent } from './team-info/index';
import { GameTimePipe } from '../pipes/index';

@Component({
  moduleId: module.id,
  selector: 'app-live-game',
  templateUrl: 'live-game.component.html',
  styleUrls: ['live-game.component.css'],
  directives: [
    MapComponent,
    DraftComponent,
    ScoreboardComponent,
    TeamInfoComponent
  ],
  pipes: [GameTimePipe]
})

export class LiveGameComponent implements DoCheck {

  scoreboard: any;
  game: any;
  radiantTeamName: any;
  direTeamName: any;
  league: any;
  series: any;

  @ViewChild('screen') screen: ElementRef;
  // @Output() docLoaded: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService, public renderer: Renderer) {
    // this.docLoaded.emit('yeup');
  }

  ngDoCheck() {
    if (this.apiService.currentGame) {
      this.scoreboard = this.apiService.currentGame.scoreboard;
      this.direTeamName = this.apiService.currentGame.dire_team_name;
      this.radiantTeamName = this.apiService.currentGame.radiant_team_name;
      this.league = this.apiService.currentGame.league;
      this.series = this.apiService.currentGame.series;
      // this.scoreboard.duration = 60 // testing
      // this.scoreboard.did_game_start = false
      // this.scoreboard.dire.players[0].respawn_timer = 8 // testing
      // this.scoreboard.dire.players[0].hero = 'ursa' // testing
      // this.scoreboard.dire.bans[3] = -1 // testing
      // this.scoreboard.dire.picks[3] = -1 // testing
      // this.scoreboard.radiant.bans[4] = -1 // testing
      // this.scoreboard.radiant.picks[4] = -1 // testing
      // this.scoreboard.dire.bans[4] = -1 // testing
      // this.scoreboard.dire.picks[4] = -1 // testing
      // console.log(this.scoreboard) // testing
    }
  }

  @HostListener(`window:resize`, ['$event'])
  onResize(event:any) {
    // console.log(event.target.outerWidth);
    console.log(event);
    // this.renderer.setElementStyle(this.screen.nativeElement, 'transform-origin', `top`);
  }

  resize(event:any) {
    let newWindow = (event.target.innerWidth / 1102).toFixed(2);
    this.renderer.setElementStyle(this.screen.nativeElement, 'zoom', `${newWindow}`);
  }
}
