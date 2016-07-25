import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './liveLeagueGame';

@Injectable()
export class ApiService {

  public firstCheckDone = false;
  radiant: any;
  dire: any;
  currentGame: LiveLeagueGame;
  public duration : number;

  constructor(private af: AngularFire) {}

  init() {
    return this.grabCurrentGame();
  }

  grabCurrentGame() {
    return this.af.database.object('currentGame');
  }

  //returns the radiant and dire players
  sortScoreboard(data: LiveLeagueGame) {
    this.getDuration(data);
    if (this.firstCheckDone) {
      this.radiant.players.map((d: any, i: any)  => {
          data.scoreboard.radiant.players[i].old_position_x = d.position_x;
          data.scoreboard.radiant.players[i].old_position_y = d.position_y;
      });
      this.dire.players.map((d: any, i: any) => {
          data.scoreboard.dire.players[i].old_position_x = d.position_x;
          data.scoreboard.dire.players[i].old_position_y = d.position_y;
      });
      this.radiant = data.scoreboard.radiant;
      this.dire = data.scoreboard.dire;
    } else {
      this.radiant = data.scoreboard.radiant;
      this.dire = data.scoreboard.dire;
      this.firstCheckDone = true;
    }
  }

  getDuration(data: LiveLeagueGame) {
    this.duration = data.scoreboard.duration;
  }
  grabPlayer(index : any, team: boolean) {
    if (team) {
      return [
        this.radiant[index].hero_id,
        this.radiant[index].old_position_y,
        this.radiant[index].old_position_y,
        this.radiant[index].position_x,
        this.radiant[index].position_y,
        this.radiant[index].respawn_timer
      ];
    } else {
      return [
        this.dire[index].hero_id,
        this.dire[index].old_position_y,
        this.dire[index].old_position_y,
        this.dire[index].position_x,
        this.dire[index].position_y,
        this.dire[index].respawn_timer
      ];
    }
  }

}
