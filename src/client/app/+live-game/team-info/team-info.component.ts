import { Component, Input } from '@angular/core';
import { HeroItemsComponent } from '../scoreboard/hero-items/index';

@Component({
  moduleId: module.id,
  selector: 'app-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['team-info.component.css'],
  directives: [
    HeroItemsComponent
  ]
})

export class TeamInfoComponent {
  @Input() team: any;
}
