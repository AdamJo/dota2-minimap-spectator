import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankedMatchesComponent } from './index';
import { RankedMatchComponent }   from './ranked-match/index';
import { TeamInfoComponent } from './team-info/index';
import { MetaInfoComponent } from './meta-info/index';
import { SpectatorsComponent } from './meta-info/spectators/index'


@NgModule({
  imports: [CommonModule],
  exports: [RankedMatchesComponent],
  declarations: [
    RankedMatchComponent,
    RankedMatchesComponent,
    TeamInfoComponent,
    MetaInfoComponent,
    SpectatorsComponent
  ]
})
export class RankedMatchesModule { }
