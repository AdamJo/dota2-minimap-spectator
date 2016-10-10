import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PreviousMatchesComponent } from './index';
import { PreviousMatchComponent } from './previous-match/index';
import { RegionOptionsComponent } from './region-options/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PreviousMatchesComponent },
    ]),
    ],
  declarations: [
    PreviousMatchesComponent,
    RegionOptionsComponent,
    PreviousMatchComponent
  ],
  exports: [PreviousMatchesComponent]
})

export class PreviousMatchesModule { }
