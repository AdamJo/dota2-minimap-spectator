import { Component, Input } from '@angular/core';
import { CalculateXPipe, CalculateYPipe, SplitNumbersPipe } from '../../pipes/index';
//import { testData } from '../resources/testData';
import { SpritesComponent } from './sprites/index';
import { SpriteAnimationComponent } from './sprite-animation/index';
//import { ApiService, LiveLeagueGame, Players } from '../services/index';
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
  providers: []
})
export class  MapComponent {
  width = 395;
  height = 380;
  @Input() radiant: any;
  @Input() dire: any;
  @Input() dayNightCycle: any;
  @Input() roshanRespawnTimer: any;
}
