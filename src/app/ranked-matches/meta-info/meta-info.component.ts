import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-meta-info',
  templateUrl: 'meta-info.component.html',
  styleUrls: ['meta-info.component.scss']
})

export class MetaInfoComponent {
  @Input() gameTime: any;
  @Input() spectators: any;
  @Input() averageMmr: any;
}