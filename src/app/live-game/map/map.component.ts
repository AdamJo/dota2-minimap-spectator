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
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class  MapComponent {
  width = 578;
  height = 556;
  maxWidth = 600;
  maxHeight = 600;
  @Input() radiant: any;
  @Input() dire: any;
  @Input() dayNightCycle: any;
  @Input() roshanRespawnTimer: any;
}
