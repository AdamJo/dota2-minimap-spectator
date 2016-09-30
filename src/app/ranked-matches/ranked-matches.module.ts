import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankedMatchesComponent } from './index';
import { RankedMatchComponent }   from './ranked-match/index';
import { TeamTitleInfoComponent } from './team-title-info/index';
import { TeamInfoComponent } from './team-info/index';
import { MetaInfoComponent } from './meta-info/index';
import { MapComponent } from './map/index';

@NgModule({
  imports: [CommonModule],
  exports: [RankedMatchesComponent],
  declarations: [
    RankedMatchComponent,
    RankedMatchesComponent,
    TeamTitleInfoComponent,
    TeamInfoComponent,
    MetaInfoComponent,
    MapComponent
  ]
})
export class RankedMatchesModule { }
