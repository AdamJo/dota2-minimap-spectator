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

import { CalculateXPipe, CalculateYPipe, SplitNumbersPipe } from '../../pipes/index';
import { SpritesComponent } from './sprites/index';
import { SpriteAnimationComponent } from './sprite-animation/index';
import { BuildingsComponent } from './buildings/index';


@Component({
  moduleId: module.id,
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: [
    'map.component.css'
  ],
  pipes: [
    CalculateXPipe,
    CalculateYPipe,
    SplitNumbersPipe
  ],
  directives: [
    SpritesComponent,
    SpriteAnimationComponent,
    BuildingsComponent
  ],
  providers: [],
  animations: [
    trigger('dayCycle', [
      state('day', style({
        opacity: 1
      })),
      state('night', style({
        opacity: 0
      })),
      transition('day <=> night', animate('750ms ease-in'))
    ]),
    trigger('nightCycle', [
      state('day', style({
        opacity: 0
      })),
      state('night', style({
        opacity: 1
      })),
      transition('day <=> night', animate('750ms ease-out'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class  MapComponent {
  width = 395;
  height = 380;
  @Input() radiant: any;
  @Input() dire: any;
  @Input() dayNightCycle: any;
  @Input() roshanRespawnTimer: any;
}
