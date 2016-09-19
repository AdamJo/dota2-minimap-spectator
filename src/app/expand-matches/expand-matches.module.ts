import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandMatchesComponent } from './expand-matches.component';

import { LiveMatchComponent } from './live-match/index';
import { DraftMatchComponent } from './draft-match/index';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandMatchesComponent, LiveMatchComponent, DraftMatchComponent
  ],
  exports: [ExpandMatchesComponent]
})

export class ExpandMatchesModule { }
