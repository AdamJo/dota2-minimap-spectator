import { NgModule } from '@angular/core';
import { UpcomingMatchesComponent } from './index';
import { UpcomingMatchComponent } from './upcoming-match/index';
import { CommonModule } from '@angular/common';
import { UpcomingGameStartPipe } from '../pipes/index';


@NgModule({
  imports: [CommonModule],
  declarations: [
    UpcomingMatchesComponent,
    UpcomingMatchComponent,
    UpcomingGameStartPipe
  ],
  exports: [
    UpcomingMatchesComponent
  ]
})

export class UpcomingMatchesModule { }
