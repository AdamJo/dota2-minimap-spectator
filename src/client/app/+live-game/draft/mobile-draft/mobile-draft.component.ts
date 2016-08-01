import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mobile-draft',
  templateUrl: 'mobile-draft.component.html',
  styleUrls: ['mobile-draft.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MobileDraftComponent {
  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;
  @Input() league: any;
}
