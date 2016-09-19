import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-spectators',
  templateUrl: 'spectators.component.html',
  styleUrls: ['spectators.component.scss']
})
export class SpectatorsComponent {
  @Input() spectators: any;
}