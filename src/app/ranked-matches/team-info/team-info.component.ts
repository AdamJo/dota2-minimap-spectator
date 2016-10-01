import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['team-info.component.scss']
})
export class TeamInfoComponent {
  @Input() players: any;
  @Input() side: string;
  @Input() sideName: string;
}