import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-spectators',
  templateUrl: 'spectators.component.html',
  styleUrls: ['spectators.component.scss']
})
export class SpectatorsComponent {
  @Input() spectators: any;
}