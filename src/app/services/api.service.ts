import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './live-league-game.model';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/rx';
import { loading } from './../assets/loading';

import { testData } from '../assets/testData';

@Injectable()
export class ApiService {

  public firstCheckDone = false;
  public currentGame: LiveLeagueGame;
  public gameCount: number;
  public dataLength: number;
  public allData: any;
  public loadDone = false;
  public isApiUp: boolean;
  public upcomingGames: any;
  public upcomingMatches: any;
  private matchId: number;
  private gameObservable: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.gameCount = 1; // top spectated game
    this.dataLength = 1;
    this.currentGame = loading;
    this.allData = [];
    this.isApiUp = true;
  }

  NewGames() {
    this.upcomingGames = this.getUpcomingGames();
    // since there are a max of 5 values being changes at a time this
    // would be called five times on every change.  The debouce grabs
    // one then waits 500 milliseconds (could be anything below 5 seconds)
    // to wait for a new one to come in.
    this.upcomingGames
    .debounceTime(500)
    .subscribe((data: any) => {
      this.upcomingMatches = data;
      if (this.upcomingMatches.length === 0) {
        this.upcomingMatches = testData;
      }
    });
  }

  liveGames() {
    this.gameObservable = this.getCurrentGames();
    this.gameObservable
    .debounceTime(500)
      .subscribe((data: any) => {
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
        this.gameCount = 1;
        this.isApiUp = false;
      }
    });
  }

  getCurrentGames() {
    return this.af.database.list('sortedGames', {
      query: {
        orderByChild: 'spectators',
        limitToLast: 5
      }
    });
  }

  getUpcomingGames() {
    return this.af.database.list('upcomingGames');
  }

  // returns the radiant and dire players
  sortScoreboard(data: LiveLeagueGame) {
    if (data.match_id) {
      if (this.matchId !== data.match_id) {
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
      this.matchId = data.match_id;
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