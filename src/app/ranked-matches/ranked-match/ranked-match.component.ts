import { Component, Input } from '@angular/core';

import { MMR } from '../../services/index'

@Component({
  selector: 'rm-ranked-match',
  templateUrl: 'ranked-match.component.html',
  styleUrls: ['ranked-match.component.scss']
})
export class RankedMatchComponent {
  @Input() match: MMR;
}