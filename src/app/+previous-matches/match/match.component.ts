import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatchHistory } from '../../services/index';

@Component({
  selector: 'pm-match',
  template: `
  <div
    class="container"
    (click)="overlay(match.match_id)">
    <span
      class="team"
      ngClass="{{match.radiant_win ? 'inactive' : 'active'}}"
      >{{match.dire_name}}</span>
    <span
      class="team"
      ngClass="{{match.radiant_win ? 'active' : 'inactive'}}"
    >{{match.radiant_name}}</span>
  </div>
  `,
  styleUrls: ['match.component.scss']
})

export class MatchComponent {
  @Input() match: MatchHistory;
  @Output() modalOutput = new EventEmitter();

  overlay(matchId) {
    this.modalOutput.emit(this.match);
  }
}
