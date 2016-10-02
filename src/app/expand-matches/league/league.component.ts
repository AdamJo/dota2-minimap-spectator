import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-league',
  template: `
    <div class="league">
      <span class="leagueName">{{league.name}}</span>
      <app-spectators
        [spectators]='spectators'
      ></app-spectators>
    </div>
    <div class="box" *ngIf="didGameStart"></div>
    <div class="duration" *ngIf="didGameStart"><span class="inside-duration">{{gameTime(duration)}}</span></div>
  `,
  styles: [`
    .league {
      margin-top: 10px;
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1000px;
      height: 30px;
    }

    .leagueName {
      overflow: hidden;
      text-overflow: ellipsis;

      margin: 0 36px;
      white-space: nowrap;
      width: 800px;
    }

    .duration {
      font-size: 1.2rem;
      display: flex;
      justify-content: center;

      position: absolute;
      left: 485px;
      top: 45px;
      width: 68px;
    }

    .box {
      content: '';
      background: transparent;
      border-top: none;
      border-bottom: 2px solid #444;
      border-left: 2px solid #444;
      border-right: 2px solid #444;

      width: 115px;
      height: 12px;

      position: absolute;
      left: 459px;
      top: 61px;
    }
  `]
})
export class LeagueComponent {
  @Input() league: any;
  @Input() duration: number;
  @Input() spectators: number;
  @Input() didGameStart: boolean;

  gameTime(time: number): string {
    let minutes = Math.floor(time / 60);
    let seconds = '00' + Math.floor(time % 3600 % 60);

    seconds = seconds.substring(seconds.length - 2);

    return `${minutes}:${seconds}`;
  }
}