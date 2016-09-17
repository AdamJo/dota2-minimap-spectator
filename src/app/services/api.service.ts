import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './live-league-game.model';
import { FirebaseListObservable } from 'angularfire2';
import { loading } from './../assets/loading';


@Injectable()
export class ApiService {

  public firstCheckDone = false; // first check of watched game done
  public currentGame: LiveLeagueGame; // list of current games
  public gameCount: number; // total number of games
  public dataLength: number; // length of games
  public allData: any; // all sorted data1
  public loadDone = false; // load of resources status
  public isApiUp: boolean; // api status
  public upcomingGames: any; // list of upcming games from firebase
  public upcomingMatches: any; // list of upcoming games
  public lockedMatchId: number;
  public locked: boolean;
  public gamePaused: boolean;
  public duration: number;
  private lockedGameFound: boolean;
  private matchId: number;
  private gameObservable: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.duration = 0;
    this.gamePaused = false;
    this.lockedMatchId = 0;
    this.gameCount = 1; // top spectated game
    this.dataLength = 1;
    this.currentGame = loading;
    this.allData = [];
    this.isApiUp = true;
    this.locked = false;
  }

  newGames() {
    this.upcomingGames = this.getUpcomingGames();
    // since there are a max of 5 values being changes at a time this
    // would be called five times on every change.  The debouce grabs
    // one then waits 500 milliseconds (could be anything below 5 seconds)
    // to wait for a new one to come in.
    this.upcomingGames
    .debounceTime(500)
    .subscribe((data: any) => {
      this.upcomingMatches = data;
    });
  }

  // go through live games
  liveGames() {
    this.gameObservable = this.getCurrentGames();
    this.gameObservable
    .debounceTime(500)
    .subscribe((data: any) => {
      this.dataLength = data.length;
      // if watching last game while the total number of games decrease it will reflect that.
      if (this.gameCount > this.dataLength) {
        this.gameCount = this.dataLength;
      }
      this.allData = data;
      if (this.lockedMatchId) {
        this.lockedGameFound = false;
        data.map((d:any) => {
          if (d.match_id === this.lockedMatchId) {
            this.sortScoreboard(d);
            this.lockedGameFound = true; 
          } 
        })

        // if game is no longer in list and locked, jump to most watched game.
        if (!this.lockedGameFound) {
          this.lockedMatchId = 0;
          this.gameCount = 1;
          this.dataLength = data.length;
          this.sortScoreboard(data[data.length - this.gameCount]);
          this.locked = false;
        }
      }
      else if (this.dataLength !== 0) {
        this.sortScoreboard(data[data.length - this.gameCount]);
        this.isApiUp = true;
      } else {
        this.gameCount = 1;
        this.isApiUp = false;
      }
    });
  }
  
  // get live games from firebase backend
  getCurrentGames() {
    return this.af.database.list('sortedGames', {
      query: {
        orderByChild: 'spectators',
        limitToLast: 5
      }
    });
  }

  // get upcoming games from firebase backend
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
      this.gamePaused = false;
      this.matchId = data.match_id;
      this.firstCheckDone = true;
    }

    if (data.scoreboard.duration > 0) {
      if (this.duration === data.scoreboard.duration) {
        this.gamePaused = true;
      } else {
        this.duration = data.scoreboard.duration
        this.gamePaused = false;
      }
      

    }
    this.currentGame = data;
    this.loadDone = true;
  }

  // return current game
  getCurrentGame() {
    return this.currentGame;
  }

  // decrease game number being watched 
  decrementTotal() {
    if (this.gameCount <= this.dataLength - 1) {
      this.gameCount = this.gameCount + 1;
      this.sortScoreboard(this.allData[this.allData.length - this.gameCount]);
    }
  }

  // increase game number being watched
  incrementTotal() {
    if (this.gameCount > 1) {
      this.gameCount = this.gameCount - 1;
      this.sortScoreboard(this.allData[this.allData.length - this.gameCount]);
    }
  }

  // when unlocked sort again.
  unlockCurrentMatch() {
    this.lockedMatchId = 0
    this.allData.sort((a: any,b: any) => {
      if (a.spectators < b.spectators)
        return -1;
      if (a.spectators > b.spectators)
        return 1;
      return 0;
    })
    this.sortScoreboard(this.allData[this.allData.length - this.gameCount]);
  }
}
