import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-spectators',
  templateUrl: 'spectators.component.html',
  styleUrls: ['spectators.component.css']
})
export class SpectatorsComponent {
  @Input() spectators: number;
}
