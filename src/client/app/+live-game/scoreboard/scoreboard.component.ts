import {
  Component,
  OnChanges,
  Input,
  ElementRef,
  HostListener,
// ChangeDetectionStrategy
} from '@angular/core';
import { AddCommasPipe } from '../../pipes/index';
import { HeroItemsComponent } from './hero-items/index';
import { HeroRespawnComponent } from './hero-respawn/index';

@Component({
  moduleId: module.id,
  selector: 'app-scoreboard',
  pipes: [
    AddCommasPipe
  ],
  directives: [
    HeroItemsComponent,
    HeroRespawnComponent
  ],
  templateUrl: 'scoreboard.component.html',
  styleUrls: ['scoreboard.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScoreboardComponent implements OnChanges {

  @Input() scoreboard: any;
  combinedPlayers: any;
  newValues: any;
  active: boolean;
  sortedValue: string;
  menuTitle: string;
  items: Array<string>;
  deathTimer: number;
  deathList: Array<any>;

  menuOptions = [
    {name: 'kills', option: '(Q) KILL/DEATH/ASSISTS' },
    {name: 'last_hits', option: '(W) LAST HITS/DENIES' },
    {name: 'level', option: '(E) HERO LEVEL' },
    {name: 'xp_per_min', option: '(R) XP PER MINUTE' },
    {name: 'gold', option: '(T) CURRENT GOLD' },
    {name: 'net_worth', option: '(Y) NET WORTH' },
    {name: 'gold_per_min', option: '(U) GOLD PER MINUTE' },
    {name: 'ultimate_cooldown', option: '(I) ULTIMATE COOLDOWN' },
    {name: 'respawn_timer', option: '(O) RESPAWN TIMER' },
  ];

  constructor(private _eref: ElementRef) {
    this.active = true;
    this.sortedValue = 'net_worth';
    this.menuTitle = 'GAME STATS';
  }

  ngOnChanges() {
    this.addTeamToPlayers(this.scoreboard);
    this.newValues = [].concat(...[this.scoreboard.dire.players, this.scoreboard.radiant.players]);
    this.newValues = this.newValues.filter((data:any) => {
      return data.hero !== 'None';
    });
    this.combinedPlayers = this.sortValues(this.sortedValue);
  }

  sortValues(value: string) {
    return this.newValues.sort((a:any, b:any) => {
      if (a[value] < b[value]) {
        return 1;
      }
      if (a[value] > b[value]) {
        return -1;
      }
      return 0;
    });
  }

  sortPlayers(value: string, menuTitleOption: string) {
    this.sortValues(value);
    this.sortedValue = value;
    this.menuTitle = menuTitleOption;
    this.active = true;
  }

  addTeamToPlayers(scoreboard:any) {
    scoreboard.dire.players = scoreboard.dire.players.map(((player:any) => {
      player['team'] = 'dire';
      return player;
    }));
    scoreboard.radiant.players = scoreboard.radiant.players.map(((player:any) => {
      player['team'] = 'radiant';
      return player;
    }));
  }

  toggle() {
    this.active = this.active ? false : true;
  }

  @HostListener(`document:click`, ['$event.target'])
  onClick(event: any) {
  if (!this._eref.nativeElement.contains(event)) // or some similar check
     this.active = true;
  }

  playerItems(value: Array<string>) {
    this.items = value;
  }

  @HostListener(`document:keypress`, ['$event'])
  keypress(e: KeyboardEvent) {
      switch(e.key) {
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
          this.sortPlayers('ultimate_cooldown', '(I) ULTIMATE COOLDOWN');
          break;
        case 'o':
        case 'O':
          this.sortPlayers('respawn_timer', '(O) RESPAWN TIMER');
          break;
      }
  }
}
