import {
  Component,
  Input,
  ChangeDetectionStrategy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Team } from '../../../services/index';

@Component({
  selector: 'lg-map',
  templateUrl: 'map.component.html',
  styleUrls: [
    './map.component.css'
  ],
  providers: [],
  animations: [
    trigger('dayCycle', [
      state('day', style({
        opacity: 1
      })),
      state('night', style({
        opacity: .8,
        filter: 'grayscale(.3)'
      })),
      transition('day <=> night', animate('750ms ease-in'))
    ]),
    trigger('pause', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('500ms ease-in-out'))
    ]),
    trigger('gameOver', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('1500ms ease-in'))
    ])
  ]
})

export class  MapComponent {
  // values for map to fit with sprites 
  width = 578;
  height = 556;
  maxWidth = 600;
  maxHeight = 600;
  winner: string;
  toggleWinner: boolean = false;

  @Input() browserCheck: boolean;
  @Input() radiant: Team;
  @Input() dire: Team;
  @Input() dayNightCycle: string;
  @Input() roshanRespawnTimer: number;
  @Input() paused: boolean;
  @Input() gameOver: any;

  ngOnChanges() {
    this.gameOver.status = true;
    this.gameOver.game = {
      cluster_name: "US East",
      dire_name: "Elements Pro Gaming",
      league_name: "Boston Major Open Qualifier",
      match_id: 2734832335,
      radiant_name: "Radiant",
      radiant_win: false
    }
    // this.gameOver.game = undefined;
    console.log(this.gameOver)
  }

  toggle() {
    if (this.gameOver.game) {
      this.toggleWinner = true;
      this.winner = 
        this.gameOver.game.radiant_win ? 
        'Radiant' :
        'Dire'
    }
  }
}
