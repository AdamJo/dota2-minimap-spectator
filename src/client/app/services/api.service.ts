import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame, Players } from './liveLeagueGame'

@Injectable()
export class ApiService {

  public firstCheckDone = false;
  radiant: Array<Players>;
  dire: Array<Players>;
  currentGame: LiveLeagueGame
  duration : number;
  
  constructor(private af: AngularFire) {
    //this.grabCurrentGame()
  }

  init() {
    return this.grabCurrentGame();
  }

  grabCurrentGame() {
    return this.af.database.object('currentGame');
  }

  //returns the radiant and dire players
  sortScoreboard(data: LiveLeagueGame) {
    if (this.firstCheckDone) {
      this.radiant.map((d: any, i: any)  => {
          data.scoreboard.radiant.players[i].old_position_x = d.position_x
          data.scoreboard.radiant.players[i].old_position_y = d.position_y
      })
      this.dire.map((d: any, i: any) => {
          data.scoreboard.dire.players[i].old_position_x = d.position_x
          data.scoreboard.dire.players[i].old_position_y = d.position_y
      })
      this.radiant = data.scoreboard.radiant.players
      this.dire = data.scoreboard.dire.players
    } else {
      this.radiant = data.scoreboard.radiant.players
      this.dire = data.scoreboard.dire.players
      this.firstCheckDone = true;
    }
    console.log(this.radiant)
    //this.radiant = data.scoreboard.radiant.players
    //this.dire = data.scoreboard.dire.players
  }

  getDuration(data: LiveLeagueGame) {
    this.duration = data.scoreboard.duration
  }

}