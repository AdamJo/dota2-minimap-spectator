import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mobile-draft',
  templateUrl: 'mobile-draft.component.html',
  styleUrls: ['mobile-draft.component.css']
})

export class MobileDraftComponent {

  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;

  constructor() {
    console.log('mobile - DraftComponent');
  }
}
