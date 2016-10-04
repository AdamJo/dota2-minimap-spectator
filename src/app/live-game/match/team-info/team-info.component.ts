import { Component, Input } from '@angular/core';
import { Players } from '../../../services/index';

@Component({
  selector: 'app-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})

export class TeamInfoComponent {
  @Input() side: string;
  @Input() team: Players;
}
