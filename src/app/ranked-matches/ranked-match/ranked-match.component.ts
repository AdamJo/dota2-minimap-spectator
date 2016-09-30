import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-ranked-match',
  templateUrl: 'ranked-match.component.html',
  styleUrls: ['ranked-match.component.scss']
})
export class RankedMatchComponent {
  @Input() match: any;
}