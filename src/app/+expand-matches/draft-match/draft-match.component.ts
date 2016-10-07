import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LiveLeagueGame } from '../../services/index';

@Component({
  selector: 'em-draft-match',
  templateUrl: 'draft-match.component.html',
  styleUrls: ['./draft-match.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DraftMatchComponent {
  @Input() match: LiveLeagueGame;
  @Input() index: number;
  @Output('change') userIndexPick = new EventEmitter();
  @Input() didGameStart: boolean;

  sendToParent() {
    this.userIndexPick.emit({
      index: this.index
    })
  }
}
