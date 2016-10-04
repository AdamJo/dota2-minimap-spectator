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
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: [
    './map.component.scss'
  ],
  providers: [],
  animations: [
    trigger('dayCycle', [
      state('day', style({
        opacity: 1
      })),
      state('night', style({
        opacity: .8
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
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class  MapComponent {
  // values for map to fit with sprites 
  width = 578;
  height = 556;
  maxWidth = 600;
  maxHeight = 600;

  @Input() radiant: Team;
  @Input() dire: Team;
  @Input() dayNightCycle: string;
  @Input() roshanRespawnTimer: number;
  @Input() paused: boolean;
}
