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
    //game paused
    if (this.oldDuration === this.duration) {
      //TODO REMOVE FOR PROD
      console.log('game paused ', this.oldDuration, this.duration);
      this.deathTimer = this.respawn;
      if (this.respawnTimer) {
        if (!this.respawnTimer.isUnsubscribed) {
          this.respawnTimer.unsubscribe();
        }
      }
    } else if (this.respawn > this.deathTimer) {
      // player bought background
      //TODO REMOVE FOR PROD
      console.log('bought back ', this.respawn, this.deathTimer);
      if (this.respawnTimer) {
        if (!this.respawnTimer.isUnsubscribed) {
          this.respawnTimer.unsubscribe();
        }
      }
      this.countdownTimer();
    } else {
      this.countdownTimer();
    }
    this.oldDuration = this.duration;
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
