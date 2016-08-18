import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Component({
  moduleId: module.id,
  selector: 'app-hero-respawn',
  template: '<div class="respawn" *ngIf="deathTimer > 0"><div>{{deathTimer}}</div></div>',
  styles: [`
    .respawn {
      background: black;
      opacity: 0.75;
      height: 46px;
      width: 82.27px;
      position: absolute;
      left: 3px;
    }

    .respawn div {
      height: 46px;
      width: 82.27px;
      vertical-align: middle;
      text-align: center;
      background: #000;
      display: table-cell;
    }
  `]
})
export class HeroRespawnComponent implements OnChanges {
  @Input() respawn: number;
  deathTimer: number;
  respawnTimer: any;

  constructor() {
    this.deathTimer = 0;
  }

  ngOnChanges() {
    this.countdownTimer();
  }
  countdownTimer() {
    // has a respawn timer
    if (this.respawn > 0) {
      this.deathTimer = this.respawn;
      this.respawnTimer = Observable
      .interval(1000)
      .take(this.respawn)
      .subscribe(() => {
        this.deathTimer = this.deathTimer - 1;
      });
    }
  }
}
