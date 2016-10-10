import { Component, Input, Output, EventEmitter } from '@angular/core';

import { LiveLeagueGame } from '../../services/index';

@Component({
  selector: 'em-live-match',
  templateUrl: 'live-match.component.html',
  styleUrls: ['./live-match.component.css']
})

export class LiveMatchComponent {
  @Input() match: LiveLeagueGame;
  @Input() index: number;
  @Output('change') userIndexPick = new EventEmitter();
  @Input() scoreboardValue: string;
  @Input() didGameStart: boolean;

  sendToParent() {
    this.userIndexPick.emit({
      index: this.index
    });
  }

  gameTime(time: number): string {
    let minutes = Math.floor(time / 60);
    let seconds = '00' + Math.floor(time % 3600 % 60);

    seconds = seconds.substring(seconds.length - 2);

    return `${minutes}:${seconds}`;
  }
}
