import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviousMatchesComponent } from './index';
import { PreviousMatchComponent } from './previous-match/index';
import { RegionOptionsComponent } from './region-options/index' 

@NgModule({
  imports: [CommonModule],
  declarations: [
    PreviousMatchesComponent,
    RegionOptionsComponent,
    PreviousMatchComponent
  ],
  exports: [PreviousMatchesComponent],
  providers: [],
})

export class PreviousMatchesModule { }
