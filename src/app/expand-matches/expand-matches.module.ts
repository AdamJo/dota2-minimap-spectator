import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandMatchesComponent } from './expand-matches.component';

import { LiveMatchComponent } from './live-match/index';
import { DraftMatchComponent } from './draft-match/index';

import { HeroPicksComponent } from './live-match/hero-picks/index';

import { SeriesComponent } from './series/index';
import { LeagueComponent } from './league/index';
import { SpectatorsComponent } from './league/spectators/index';

import { HeroRespawnComponent } from './live-match/hero-respawn';
import { ScoreboardMatchComponent } from './scoreboard-match/index';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandMatchesComponent,
    LiveMatchComponent,
    DraftMatchComponent,
    HeroPicksComponent,
    SeriesComponent,
    LeagueComponent,
    HeroRespawnComponent,
    SpectatorsComponent,
    ScoreboardMatchComponent
  ],
  exports: [ExpandMatchesComponent]
})

export class ExpandMatchesModule { }
