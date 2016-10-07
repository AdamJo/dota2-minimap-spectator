import { Component, Input } from '@angular/core';

import { RankedPlayers } from '../../services/index';

@Component({
  selector: 'rm-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['team-info.component.css']
})
export class TeamInfoComponent {
  @Input() players: RankedPlayers;
  @Input() side: string;
  @Input() sideName: string;
}