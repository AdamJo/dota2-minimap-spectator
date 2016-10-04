import { Component, Input } from '@angular/core';

import { MatchHistory } from '../../services/index'

@Component({
  selector: 'app-previous-match',
  templateUrl: 'previous-match.component.html',
  styleUrls: ['previous-match.component.scss']
})
export class PreviousMatchComponent {
  @Input() match: MatchHistory;
  @Input() sortValue: string;
  direWinner: boolean;
  radiantWinner: boolean;

  ngOnInit() {
    if (this.match.radiant_win) {
      this.radiantWinner = true;
      this.direWinner = false;
    } else {
      this.radiantWinner = false;
      this.direWinner = true;
    }
  }
}
