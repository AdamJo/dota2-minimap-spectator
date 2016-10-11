import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'em-scoreboard-match',
  template: `
    <ul class="container-scoreboard">
      <li
        class="choices"
        [class.active]="choice.name === active"
        [class.inactive]="choice.name !== active"
        *ngFor="let choice of menuOptions; let i = index"
        (click)=changeScoreboardValue(choice.name)>
        <span class="shortcut">{{choice.shortcut}}</span>
        <span class="option">{{choice.option}}</span>
      </li>
    </ul>
  `,
  styles: [`
    .container-scoreboard {
      display: flex;
      flex-direction: row;
      align-items: center; 
      justify-content: space-around;

      color: #d9d9d9;
      font-size: .8rem;
      width: 1040px;
      height: 50px;

      list-style-type: none;
      padding: 0;
      margin: 5px 0;

    }

    .choices {
      background: #222;
      border: 1px solid #2f2724;

      width: 100px;
      height: 50px;

      display: flex;
      flex-direction: column;

      text-align: center;

      cursor: pointer;

      box-shadow: 0px 0px 7px 0px #808080;
      transition: box-shadow 300ms ease-in-out both;
    }

    .shortcut {
      margin-top:3px;
    }

    .choices:hover {
      border: 1px solid transparent;
      background: rgba(34, 98, 126, 0.5);
      box-shadow: 0px 0px 15px 0px #22627E;
    }

    .active {
      box-shadow: 0px 0px 15px 0px #22627E;
      transition: box-shadow 300ms ease-in;
    }

    .inactive {
      box-shadow: 0px 0px 15px 0px #red;
      transition: box-shadow 300ms ease-out;
    }
  `]
})
export class ScoreboardMatchComponent implements OnChanges {
  @Input() shortcut: string;
  @Output('change') userScoreboardPick = new EventEmitter();
  active: string;

  menuOptions = [
    {name: 'kills', option: 'K / D / A', shortcut: '(Q)'},
    {name: 'last_hits', option: 'L / D', shortcut: '(W)' },
    {name: 'level', option: 'Level', shortcut: '(E)' },
    {name: 'xp_per_min', option: 'XPM', shortcut: '(R)' },
    {name: 'gold', option: 'Current Gold', shortcut: '(T)' },
    {name: 'net_worth', option: 'Net Worth', shortcut: '(Y)' },
    {name: 'gold_per_min', option: 'GPM', shortcut: '(U)' },
    {name: 'ultimate_cooldown', option: 'Ultimate CD', shortcut: '(I)' },
    {name: 'respawn_timer', option: 'Respawn', shortcut: '(O)' },
  ];

  ngOnChanges(changes) {
    this.active = this.shortcut;
  }

  // toggles menu and scorebaord
  changeScoreboardValue(option) {
    this.active = option;
    this.userScoreboardPick.emit({
      value: option
    });
  }
}
