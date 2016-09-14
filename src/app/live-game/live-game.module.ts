import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonInfoComponent } from './button-info/index';
import { MiniDraftComponent } from './mini-draft/index';
import { LiveGameComponent } from './live-game.component';

import { SpritesComponent } from './map/sprites/index';
import { SpriteAnimationComponent } from './map/sprite-animation/index';
import { BuildingsComponent } from './map/buildings/index';

import { HeroItemsComponent } from './scoreboard/hero-items/index';
import { HeroRespawnComponent } from './scoreboard/hero-respawn/index';


import { MapComponent } from './map/index';
import { DraftComponent } from './draft/index';
import { ScoreboardComponent } from './scoreboard/index';
import { TeamInfoComponent } from './team-info/index';

import {
  CalculateXPipe,
  CalculateYPipe,
  GameTimePipe,
  SplitNumbersPipe,
  AddCommasPipe
} from '../pipes/index';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LiveGameComponent,
    ScoreboardComponent,
    ButtonInfoComponent,
    SpritesComponent,
    SpriteAnimationComponent,
    BuildingsComponent,
    HeroItemsComponent,
    HeroRespawnComponent,
    MiniDraftComponent,
    MapComponent,
    DraftComponent,
    TeamInfoComponent,
    CalculateXPipe,
    CalculateYPipe,
    GameTimePipe,
    SplitNumbersPipe,
    AddCommasPipe
  ],
  exports: [LiveGameComponent]
})

export class LiveGameModule { }
