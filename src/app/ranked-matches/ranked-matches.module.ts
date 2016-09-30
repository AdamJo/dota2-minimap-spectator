import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankedMatchesComponent } from './index';
import { RankedMatchComponent }   from './ranked-match/index';



@NgModule({
  imports: [CommonModule],
  exports: [RankedMatchesComponent],
  declarations: [
    RankedMatchesComponent,
    RankedMatchComponent
  ]
})
export class RankedMatchesModule { }
