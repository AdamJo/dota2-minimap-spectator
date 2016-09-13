import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})

export class TeamInfoComponent {
  @Input() side: any;
  @Input() team: any;
}
