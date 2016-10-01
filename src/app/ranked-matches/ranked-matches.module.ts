import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankedMatchesComponent } from './index';
import { RankedMatchComponent }   from './ranked-match/index';
import { TeamTitleInfoComponent } from './team-title-info/index';
import { TeamInfoComponent } from './team-info/index';
import { MetaInfoComponent } from './meta-info/index';
import { MapComponent } from './map/index';
import { SpectatorsComponent } from './meta-info/spectators/index'


@NgModule({
  imports: [CommonModule],
  exports: [RankedMatchesComponent],
  declarations: [
    RankedMatchComponent,
    RankedMatchesComponent,
    TeamTitleInfoComponent,
    TeamInfoComponent,
    MetaInfoComponent,
    SpectatorsComponent,
    MapComponent
  ]
})
export class RankedMatchesModule { }
