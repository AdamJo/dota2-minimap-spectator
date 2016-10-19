import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './live-league-game.model';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { loading } from '../../assets/initialLoadData/loading';

@Injectable()
export class ApiService {

  // live games
  public firstCheckDone = false; // first check of watched game done
  public gameCount: number; // total number of games
  public dataLength: number; // length of games
  public allData: Array<any>; // all sorted data1
  public loadDone = false; // load of resources status
  public isApiUp: boolean; // api status
  public currentGame: LiveLeagueGame; // list of current games
  public currentMatchId: number;
  public scoreboardValues: any;
  public statusCode: FirebaseObjectObservable<any>;

  public gamePaused: boolean;
  public duration: number;

  public mmrTopGames: any;

  private currentMatchNotFound: boolean;
  private matchId: number;
  private game$: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.duration = 0;
    this.gamePaused = false;
    this.currentMatchId = -1;
    this.gameCount = 5; // top spectated game
    this.dataLength = 1;
    this.currentGame = loading;
    this.allData = [];
    this.isApiUp = true;
    this.allData = [loading];

    this.scoreboardValues = {
      sortedValue: 'None',
      active: 'draft',
      menuTitle: 'GAME STATS'
    };
  }

  // go through live games
  liveGames() {
    // determine status code
    this.statusCode = this.getStatusCode()
    this.statusCode.subscribe((code: any) => {
      if (code.$value === 'online') {
        this.isApiUp = true;
      } else {
        console.log('statusCode - OFFLINE');
        this.isApiUp = false;
      }
    })

    this.game$ = this.getCurrentGames();
    this.game$
    .debounceTime(100)
    .subscribe((data: any) => {
      this.dataLength = data.length;
      this.allData = data;

      // inital load
      if (this.currentMatchId === -1) {
        this.currentMatchId = 0;
      }

      // if watching last game while the total number of games decrease it will reflect that.
      if (this.gameCount > this.dataLength) {
        this.gameCount = this.dataLength;
      }

      // if game exists and any length
      if (this.currentMatchId && this.dataLength !== 0) {
        this.currentMatchNotFound = false;
        data.map((d: any, i: number) => {
          if (d.match_id === this.currentMatchId) {
            if (i === 0) {
              this.gameCount = this.dataLength;
            } else {
              this.gameCount = this.dataLength - i;
            }
            this.sortScoreboard(d);
            this.currentMatchNotFound = true;
          }
        });
        if (!this.currentMatchNotFound) {
          this.dataLength = data.length;
          this.gameCount = this.dataLength;
          this.sortScoreboard(data[data.length - this.gameCount]);
        }
      } else if (this.dataLength !== 0) {
      // inital load or not matchID
        this.sortScoreboard(data[data.length - this.gameCount]);
      } else {
        this.gameCount = 5;
      }
    });
  }

  // get status code (liveGames) from firebase backend
  getStatusCode() {
    return this.af.database.object('statusCode');
  }

  // get live games from firebase backend
  getCurrentGames() {
    return this.af.database.list('sortedGames');
  }

  // get upcoming games from firebase backend
  getUpcomingGames() {
    return this.af.database.list('upcomingGames');
  }

  // get upcoming games from firebase backend
  getPreviousGames() {
    return this.af.database.list('matchHistory');
  }

  // get upcoming games from firebase backend
  getMmrTop() {
    return this.af.database.list('mmrTop');
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
        this.duration = data.scoreboard.duration;
        this.gamePaused = false;
      }
    }
    this.currentGame = data;
    this.currentMatchId = this.currentGame.match_id;
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
      this.sortScoreboard(this.allData[this.dataLength - this.gameCount]);
    }
  }

  // increase game number being watched
  incrementTotal() {
    if (this.gameCount > 1) {
      this.gameCount = this.gameCount - 1;
      this.sortScoreboard(this.allData[this.dataLength - this.gameCount]);
    }
  }

  // when switching from '/Expand' to ''
  // game count is set to new game, and games is sorted.
  SwitchToGame(index: number) {
    this.gameCount = this.allData.length - index;
    this.sortScoreboard(this.allData[index]);
  }

  // sort games by spectators, largest to smallest
  sortBySpectators(games) {
    return games.sort((a: any, b: any) => {
      if (a.spectators > b.spectators) {
        return -1;
      }
      if (a.spectators < b.spectators) {
        return 1;
      }
      return 0;
    });
  }
}
