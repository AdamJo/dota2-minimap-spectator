import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-team-title-info',
  templateUrl: 'team-title-info.component.html',
  styleUrls: ['team-title-info.component.scss']
})
export class TeamTitleInfoComponent {
  @Input() score: number;
  @Input() side: string;
}
