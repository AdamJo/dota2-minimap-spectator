import { Component, Input } from '@angular/core';

import { MatchHistory } from '../../services/index'

@Component({
  selector: 'pm-previous-match',
  templateUrl: 'previous-match.component.html',
  styleUrls: ['previous-match.component.css']
})
export class PreviousMatchComponent {
  @Input() matches: any;
}
