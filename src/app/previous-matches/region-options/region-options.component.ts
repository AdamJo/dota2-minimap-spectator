import { Component, Input, Output, EventEmitter,
         trigger, transition, animate,
         style, state } from '@angular/core';

@Component({
  selector: 'app-region-options',
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

      color: $text-color;
      font-size: .8rem;
      width: 1040px;

      list-style-type: none;
      padding: 0;
      margin: 5px 0;
    }

    .choices {
      width: 100px;
      display: flex;
      flex-direction: column;

      text-align: center;

      cursor: pointer;

      box-shadow: 0px 0px 15px 0px #142958;
      transition: box-shadow 300ms ease-in-out both;
    }

    .choices:hover {
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

    li {
      background: #222;
      border: 1px solid #2f2724;
      padding-top: 5px;
    }
  `]
})

export class RegionOptionsComponent {
  @Input() regions: Array<string>;
  // @Input() shortcut: string;
  @Output('change') userRegionPick = new EventEmitter();
  active: string;

  ngOnChanges() {
    // this.active = this.shortcut;
  }

  // toggles menu and scorebaord
  changeScoreboardValue(option) {
    this.active = option;
    this.userRegionPick.emit(option)
  }
}