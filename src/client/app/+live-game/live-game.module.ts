import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveGameComponent } from './live-game.component';
import { ApiService } from '../services/index';

@NgModule({
    imports: [CommonModule],
    declarations: [LiveGameComponent],
    exports: [LiveGameComponent],
    providers: [
      ApiService
    ]
})

export class HomeModule { }