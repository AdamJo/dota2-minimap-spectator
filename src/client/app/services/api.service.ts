import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './liveLeagueGame';

@Injectable()
export class ApiService {

  public firstCheckDone = false;
  public currentGame: LiveLeagueGame;
  private match_id: number;

  constructor(private af: AngularFire) {}

  grabCurrentGame() {
    return this.af.database.object('currentGame');
  }

  //returns the radiant and dire players
  sortScoreboard(data: LiveLeagueGame) {
    if (this.match_id !== data.match_id) {
      this.firstCheckDone = false;
    }

    if (this.firstCheckDone) {
      this.currentGame.scoreboard.radiant.players.map((d: any, i: any)  => {
          data.scoreboard.radiant.players[i].old_position_x = d.position_x;
          data.scoreboard.radiant.players[i].old_position_y = d.position_y;
      });
      this.currentGame.scoreboard.dire.players.map((d: any, i: any) => {
          data.scoreboard.dire.players[i].old_position_x = d.position_x;
          data.scoreboard.dire.players[i].old_position_y = d.position_y;
      });
    } else {
      this.match_id = data.match_id
      this.firstCheckDone = true;
    }
    
    this.currentGame = data;
    console.log(data)
  }
}
