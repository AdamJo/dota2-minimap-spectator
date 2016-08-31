import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['team-info.component.css']
})

export class TeamInfoComponent {
  @Input() side: any;
  @Input() team: any;
}
