import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './liveLeagueGame';
import { FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ApiService {

  public firstCheckDone = false;
  public currentGame: LiveLeagueGame;
  public gameCount: number;
  public dataLength: number;
  public allData: any;
  public loadDone = false;
  public isApiUp: boolean;
  private match_id: number;
  private gameObservable: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.gameCount = 1; //top game
    this.isApiUp = true;
  }

  main() {
    this.gameObservable = this.grabCurrentGame();
    this.gameObservable.subscribe((data:any) => {
      this.dataLength = data.length;

      // if watching last game this statement 
      if (this.gameCount > this.dataLength) {
        this.gameCount = this.dataLength;
      }

      this.allData = data;
      if (this.dataLength !== 0) {
        this.sortScoreboard(data[data.length - this.gameCount]);
        this.isApiUp = true;
      } else {
        this.isApiUp = false;
      }
    });
  }

  grabCurrentGame() {
    return this.af.database.list('sortedGames', {
      query: {
        orderByChild: 'spectators',
        limitToLast: 5
      }
    });
  }

  //returns the radiant and dire players
  sortScoreboard(data: LiveLeagueGame) {
    // console.log('inside scorebaord')

    if (data.match_id) {
      if (this.match_id !== data.match_id) {
        this.firstCheckDone = false;
      }
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
      this.match_id = data.match_id;
      this.firstCheckDone = true;
    }

    this.currentGame = data;
    this.loadDone = true;
  }

  getCurrentGame() {
    return this.currentGame;
  }

  decrementTotal() {
    if (this.gameCount <= this.dataLength - 1) {
      this.gameCount = this.gameCount + 1;
      this.sortScoreboard(this.allData[this.allData.length - this.gameCount]);
    }
  }

  incrementTotal() {
    if (this.gameCount > 1) {
      this.gameCount = this.gameCount - 1;
      this.sortScoreboard(this.allData[this.allData.length - this.gameCount]);
    }
  }
}
