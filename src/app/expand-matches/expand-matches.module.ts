import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandMatchesComponent } from './expand-matches.component';

import { LiveMatchComponent } from './live-match/index';
import { DraftMatchComponent } from './draft-match/index';

import { HeroPicksComponent } from './live-match/hero-picks/index';
import { SeriesComponent } from './series/index';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandMatchesComponent, LiveMatchComponent, DraftMatchComponent, HeroPicksComponent, SeriesComponent
  ],
  exports: [ExpandMatchesComponent]
})

export class ExpandMatchesModule { }
