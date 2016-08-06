import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Component({
  moduleId: module.id,
  selector: 'app-hero-respawn',
  template: '<div class="respawn" *ngIf="deathTimer > 0"><div>{{deathTimer}}</div></div>',
  styles: [`
    .respawn {
      background: black;
      opacity: 0.75;
      height: 33px;
      width: 59px;
      position: absolute;
      left: 3px;
    }

    .respawn div {
      height: 33px;
      width: 59px;
      vertical-align: middle;
      text-align: center;
      background: #000;
      display: table-cell;
    }
  `]
})
export class HeroRespawnComponent implements OnChanges {
  @Input() respawn: number;
  @Input() duration: number;
  @Output() respawnEnd = new EventEmitter<boolean>();
  deathTimer: number;
  respawnTimer: any;
  oldDuration: number;

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
