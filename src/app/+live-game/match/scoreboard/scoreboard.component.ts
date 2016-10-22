import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';

import { ApiService, Scoreboard, Players } from '../../../services/index';

@Component({
  selector: 'lg-scoreboard',
  templateUrl: 'scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScoreboardComponent implements OnChanges, OnInit, OnDestroy {

  @Input() scoreboard: Scoreboard;
  @Output() highlightPlayer = new EventEmitter();
  combinedPlayers: Array<Players>;
  newValues: Array<Players>;
  active: string;
  sortedValue: string;
  menuTitle: string;
  items: Array<string>;

  menuOptions = [
    {name: 'gameStats', option: '(A) GAME STATS' },
    {name: 'kills', option: '(Q) KILL/DEATH/ASSISTS' },
    {name: 'last_hits', option: '(W) LAST HITS/DENIES' },
    {name: 'level', option: '(E) HERO LEVEL' },
    {name: 'xp_per_min', option: '(R) XP PER MINUTE' },
    {name: 'gold', option: '(T) CURRENT GOLD' },
    {name: 'net_worth', option: '(Y) NET WORTH' },
    {name: 'gold_per_min', option: '(U) GOLD PER MINUTE' },
    // {name: 'ultimate_cooldown', option: '(I) ULTIMATE COOLDOWN' },
    {name: 'buyback_status', option: '(I) BUYBACK STATUS (Estimated)' },
    {name: 'draft', option: '(O) DRAFT' },
  ];

  constructor(public apiService: ApiService, private _eref: ElementRef) {
    this.sortedValue = 'net_worth';
    this.active = 'gameStats';
    this.menuTitle = '(A) GAME STATS';
      this.sortPlayers('gameStats', '(A) GAME STATS');
  }

  ngOnInit() {
    if (this.apiService.scoreboardValues.sortedValue !== 'None') {
      this.sortedValue = this.apiService.scoreboardValues.sortedValue;
      this.menuTitle = this.apiService.scoreboardValues.menuTitle;
      this.active = 'scoreboard';
    } else {
      this.active = 'gameStats';
      this.menuTitle = this.apiService.scoreboardValues.menuTitle;
      this.sortPlayers('gameStats', '(A) GAME STATS');
    }
    this.mainSort();
  }

  ngOnChanges(changes) {
    this.mainSort();
  }

  mainSort() {
    this.addTeamToPlayers(this.scoreboard);
    this.newValues = [].concat(...[this.scoreboard.dire.players, this.scoreboard.radiant.players]);
    this.newValues = this.newValues.filter((data: any) => {
      return data.hero !== 'None';
    });
    if (this.active === 'scoreboard') {
      this.combinedPlayers = this.sortValues(this.sortedValue);
    } else if (this.active === 'draft') {
      this.sortPlayers('draft', '(O) DRAFT');
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  sortValues(value: string) {
    return this.newValues.sort((a: any, b: any) => {
      if (a[value] < b[value]) {
        return 1;
      }
      if (a[value] > b[value]) {
        return -1;
      }
      return 0;
    });
  }

  // sort plays by value given
  sortPlayers(value: string, menuTitleOption: string) {
    if (value === 'draft') {
      this.menuTitle = menuTitleOption;
      this.active = 'draft';
    } else if (value === 'gameStats') {
      this.menuTitle = menuTitleOption;
      this.active = 'gameStats';
    } else {
      this.sortedValue = value;
      this.menuTitle = menuTitleOption;
      this.combinedPlayers = this.sortValues(value);
      this.active = 'scoreboard';
    }
  }

  // adds team to players array for the color in scoreboard
  addTeamToPlayers(scoreboard: any) {
    scoreboard.dire.players = scoreboard.dire.players.map(((player: any) => {
      player['team'] = 'dire';
      return player;
    }));
    scoreboard.radiant.players = scoreboard.radiant.players.map(((player: any) => {
      player['team'] = 'radiant';
      return player;
    }));
  }

  // toggles menu and scoreboard
  toggle() {
    if (this.active === 'menu') {
      if (this.menuTitle === '(O) DRAFT') {
        this.active = 'draft';
      } else if (this.menuTitle === '(A) GAME STATS') {
        this.active = 'gameStats';
      } else {
        this.active = 'scoreboard';
      }
    } else {
      this.active = 'menu';
    }
  }

  // un expands menu when clicked outside of the area. 
  @HostListener(`document:click`, ['$event.target'])
  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event)) {
      // need the if since draft is not in the scoreboard area
      if (this.menuTitle === '(O) DRAFT') {
        this.active = 'draft';
      } else if (this.menuTitle === '(A) GAME STATS') {
        this.active = 'gameStats';
      } else {
        this.active = 'scoreboard';
      }
    }
  }

  // send player items
  playerItems(value: Array<string>) {
    this.items = value;
  }

  // use in-game shortcuts to navigate scoreboard
  @HostListener(`document:keypress`, ['$event'])
  keypress(e: KeyboardEvent) {
      switch (e.key) {
        case 'a':
        case 'A':
          this.sortPlayers('gameStats', '(A) GAME STATS');
          break;
        case 'q':
        case 'Q':
          this.sortPlayers('kills', '(Q) KILL/DEATH/ASSISTS');
          break;
        case 'w':
        case 'W':
          this.sortPlayers('last_hits', '(W) LAST HITS/DENIES');
          break;
        case 'e':
        case 'E':
          this.sortPlayers('level', '(E) HERO LEVEL');
          break;
        case 'r':
        case 'R':
          this.sortPlayers('xp_per_min', '(R) XP PER MINUTE');
          break;
        case 't':
        case 'T':
          this.sortPlayers('gold', '(T) CURRENT GOLD');
          break;
        case 'y':
        case 'Y':
          this.sortPlayers('net_worth', '(Y) NET WORTH');
          break;
        case 'u':
        case 'U':
          this.sortPlayers('gold_per_min', '(U) GOLD PER MINUTE');
          break;
        case 'i':
        case 'I':
          this.sortPlayers('buyback_status', '(I) BUYBACK STATUS (Estimated)');
          break;
        case 'o':
        case 'O':
          this.sortPlayers('draft', '(O) DRAFT');
          break;
        default:
          break;
      }
  }

  ngOnDestroy() {
    if (this.active === 'scoreboard') {
      this.apiService.scoreboardValues = {
        sortedValue: this.sortedValue,
        active: 'scoreboard',
        menuTitle: this.menuTitle
      };
    } else {
      this.apiService.scoreboardValues = {
        sortedValue: 'None',
        active: 'draft',
        menuTitle: this.menuTitle
      };
    }
  }
}
