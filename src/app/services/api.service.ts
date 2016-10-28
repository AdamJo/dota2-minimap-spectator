/* tslint:disable: max-line-length */
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LiveLeagueGame } from './live-league-game.model';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { loading } from '../../assets/initialLoadData/loading';

declare var window;
declare var InstallTrigger;
declare var opr;

@Injectable()
export class ApiService {

  public browser: boolean;
  public oldMatchId: number;
  public gameOver: any;
  public previousGame$: any;

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

    this.gameOver = { status: false, game: {} };

    this.duration = 0;
    this.gamePaused = false;
    this.firstCheckDone = false;
    this.currentMatchId = -1;
    this.gameCount = 5; // top spectated game
    this.dataLength = 1;
    this.currentGame = loading;
    this.allData = [];
    this.isApiUp = true;
    this.allData = [loading];

    this.scoreboardValues = {
      sortedValue: 'None',
      active: 'gameStats',
      menuTitle: '(A) GAME STATS'
    };
    this.detectBrowser();
  }

  // go through live games
  liveGames() {
    // determine status code
    this.statusCode = this.getStatusCode();
    this.statusCode.subscribe((code: any) => {
      if (code.$value === 'online') {
        this.isApiUp = true;
      } else {
        this.isApiUp = false;
      }
    });

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

  findPreviousGame() {
    this.previousGame$ = this.af.database.list('matchHistory')
      .debounceTime(100)
      .subscribe( (games: any) => {
        this.gameOver.game = games.find((game) => {
          if (game['match_id'] === this.oldMatchId) {
            return game;
          }
        });
      },
      val => console.log('ERROR -> ', val),
      () => {
        if (this.gameOver.game !== {}) {
          return;
        }
      });
  }

  // get upcoming games from firebase backend
  getMmrTop() {
    return this.af.database.list('mmrTop');
  }

  // returns the radiant and dire players
  sortScoreboard(data: LiveLeagueGame) {
    if (this.firstCheckDone && this.matchId !== data.match_id &&
        this.currentGame['league_tier'] > 1) {
      this.oldMatchId = this.matchId;
      this.gameOver.status = true;
      this.findPreviousGame();
    } else {
      if (this.previousGame$ !== undefined || this.previousGame$) {
        this.previousGame$.unsubscribe();
      }

      if (data.match_id) {
        if (this.matchId !== data.match_id) {
          this.firstCheckDone = false;
        }
      }

      this.gameOver.status = false;
      this.gameOver.game = undefined;

      if (this.firstCheckDone) {
        this.currentGame.scoreboard.radiant.players.map((d: any, i: any)  => {
          if (data.scoreboard.radiant.players[i].ultimate_cooldown > d.old_ultimate_cooldown) {
            data.scoreboard.radiant.players[i].ultimate_used = true;
            data.scoreboard.radiant.players[i].old_ultimate_cooldown =
              data.scoreboard.radiant.players[i].ultimate_cooldown;
          } else {
            data.scoreboard.radiant.players[i].ultimate_used = false;
            data.scoreboard.radiant.players[i].old_ultimate_cooldown =
              data.scoreboard.radiant.players[i].ultimate_cooldown;
          }

          data.scoreboard.radiant.players[i].old_position_x = d.position_x;
          data.scoreboard.radiant.players[i].old_position_y = d.position_y;
        });
        this.currentGame.scoreboard.dire.players.map((d: any, i: any) => {
          if (data.scoreboard.dire.players[i].ultimate_cooldown > d.old_ultimate_cooldown) {
            data.scoreboard.dire.players[i].ultimate_used = true;
            data.scoreboard.dire.players[i].old_ultimate_cooldown =
              data.scoreboard.dire.players[i].ultimate_cooldown;
          } else {
            data.scoreboard.dire.players[i].ultimate_used = false;
            data.scoreboard.dire.players[i].old_ultimate_cooldown =
              data.scoreboard.dire.players[i].ultimate_cooldown;
          }
          data.scoreboard.dire.players[i].old_position_x = d.position_x;
          data.scoreboard.dire.players[i].old_position_y = d.position_y;
        });
      } else {
        data.scoreboard.radiant.players.map((d: any, i: any)  => {
          data.scoreboard.radiant.players[i].ultimate_used = false;
          data.scoreboard.radiant.players[i].old_ultimate_cooldown = d.ultimate_cooldown;
        });
        data.scoreboard.dire.players.map((d: any, i: any) => {
          data.scoreboard.dire.players[i].ultimate_used = false;
          data.scoreboard.dire.players[i].old_ultimate_cooldown = d.ultimate_cooldown;
        });
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
  }

  // return current game
  getCurrentGame() {
    return this.currentGame;
  }

  // decrease game number being watched 
  decrementTotal() {
    if (this.gameCount <= this.dataLength - 1) {
      this.firstCheckDone = false;
      this.gameCount = this.gameCount + 1;
      this.sortScoreboard(this.allData[this.dataLength - this.gameCount]);
    }
  }

  // increase game number being watched
  incrementTotal() {
    if (this.gameCount > 1) {
      this.firstCheckDone = false;
      this.gameCount = this.gameCount - 1;
      this.sortScoreboard(this.allData[this.dataLength - this.gameCount]);
    }
  }

  // when switching from '/Expand' to ''
  // game count is set to new game, and games is sorted.
  SwitchToGame(index: number) {
    this.firstCheckDone = false;
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

  detectBrowser() {
    // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    // http://stackoverflow.com/questions/39120772/how-to-detect-safari-10-browser-in-javascript/39621764#39621764
    let isFirefox = typeof InstallTrigger !== 'undefined';
    let isChrome = !!window.chrome && (!!window.chrome.webstore || /Google Inc/.test(navigator.vendor));
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // checks up to safari 10
    let isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || !isChrome && !isOpera && window.webkitAudioContext !== undefined;
    if ((isChrome || isFirefox) && !isSafari) {
      this.browser = true;
    } else {
      this.browser = false;
    }
  }

  passToken(tokenId, amount, currency, description) {
    this.af.database.list('queue/tasks').push(
      {
        'token': tokenId,
        'amount': amount,
        'currency': currency,
        'description': description
      }
    );
  }
}
