import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandMatchesComponent } from './expand-matches.component'

import { LiveMatchComponent } from './live-match/index'

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandMatchesComponent, LiveMatchComponent
  ],
  exports: [ExpandMatchesComponent]
})

export class ExpandMatchesModule { }
