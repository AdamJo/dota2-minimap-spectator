import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LiveGameComponent } from './live-game.component';

import { ButtonInfoComponent } from './button-info/index';

import { DraftComponent } from './draft/index';

import { MatchComponent } from './match/index';
import { SpritesComponent } from './match/map/sprites/index';
import { SpriteAnimationComponent } from './match/map/sprite-animation/index';
import { BuildingsComponent } from './match/map/buildings/index';
import { MapComponent } from './match/map/index';
import { ScoreboardComponent } from './match/scoreboard/index';
import { TeamInfoComponent } from './match/team-info/index';
import { MiniDraftComponent } from './match/scoreboard/mini-draft/index';
import { SummaryGraphComponent } from './match/scoreboard/summary-graph/index';
import { SummaryPlayersComponent } from './match/scoreboard/summary-players/index';
import { HeroItemsComponent } from './match/scoreboard/hero-items/index';
import { HeroRespawnComponent } from './match/scoreboard/hero-respawn/index';
import { SeriesComponent } from './series/index';
import { ComparisonSvg } from './match/comparison-svg/index';

import {
  CalculateXPipe,
  CalculateYPipe,
  GameTimePipe,
  SplitNumbersPipe,
  AddCommasPipe
} from '../pipes/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LiveGameComponent },
    ]),
  ],
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
    SummaryGraphComponent,
    MapComponent,
    DraftComponent,
    TeamInfoComponent,
    SummaryPlayersComponent,
    MatchComponent,
    SeriesComponent,
    ComparisonSvg,
    CalculateXPipe,
    CalculateYPipe,
    GameTimePipe,
    SplitNumbersPipe,
    AddCommasPipe
  ],
  exports: [LiveGameComponent]
})

export class LiveGameModule { }
