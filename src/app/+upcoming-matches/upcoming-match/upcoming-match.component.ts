import { Component, Input } from '@angular/core';

import { UpcomingGames } from '../../services/index'

@Component({
  selector: 'um-upcoming-match',
  templateUrl: 'upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.css']
})
export class UpcomingMatchComponent {
  @Input() match: any;
}