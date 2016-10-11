import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-region-options',
  template: `
    <ul class="container-region">
      <li
        class="choices"
        [class.active]="choice === active"
        [class.inactive]="choice !== active"
        *ngFor="let choice of regions; let i = index"
        (click)=changeScoreboardValue(choice)>
        <span class="option">{{choice}}</span>
      </li>
    </ul>
  `,
  styles: [`
    .container-region {
      display: flex;
      flex-direction: row;
      align-items: center; 
      justify-content: space-around;
      flex-wrap: wrap;

      color: $text-color;
      font-size: 1rem;
      width: 1040px;
      height: 46px;

      list-style-type: none;
      margin: 5px 0;
    }

    .choices {
      background: #222;
      border: 1px solid #2f2724;

      display: flex;
      flex-direction: column;
      width: 140px;
      height: 40px;

      line-height: 40px;

      text-align: center;

      cursor: pointer;

      margin-bottom: 15px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      box-shadow: 0px 0px 7px 0px #808080;
      transition: box-shadow 300ms ease-in-out both;
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

export class RegionOptionsComponent implements OnChanges {
  @Input() regions: Array<string>;
  @Input() inactive: string;
  @Output('change') userRegionPick = new EventEmitter();
  active: string;
  lastInput: string;

  ngOnChanges(changes) {
    if (this.inactive) {
      this.active = 'inactive';
      this.lastInput = '';
    } else {
      this.lastInput = '';
    }
  }

  // toggles menu and scorebaord
  changeScoreboardValue(option) {
    if (option === this.lastInput) {
      this.active = 'inactive';
    } else {
      this.active = option;
      this.lastInput = option;
    }
    this.userRegionPick.emit(option);
  }
}
