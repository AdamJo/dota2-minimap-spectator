import { Component, Input } from '@angular/core';

import { UpcomingGames } from '../../services/index'

@Component({
  selector: 'app-upcoming-match',
  templateUrl: 'upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.scss']
})
export class UpcomingMatchComponent {
  @Input() match: UpcomingGames;
}
