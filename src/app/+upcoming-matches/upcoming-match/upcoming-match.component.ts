import { Component, Input } from '@angular/core';

@Component({
  selector: 'um-upcoming-match',
  templateUrl: 'upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.scss']
})
export class UpcomingMatchComponent {
  @Input() match: any;
}
