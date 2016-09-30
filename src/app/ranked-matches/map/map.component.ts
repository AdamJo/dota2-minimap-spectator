import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})

export class MapComponent {
  @Input() players: any;
}