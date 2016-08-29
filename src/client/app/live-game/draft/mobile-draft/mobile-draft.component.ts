import { Component, Input, ChangeDetectionStrategy, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { MiniDraftComponent } from '../../../shared/mini-draft/index';

@Component({
  moduleId: module.id,
  selector: 'mobile-draft',
  templateUrl: 'mobile-draft.component.html',
  styleUrls: ['mobile-draft.component.css'],
  directives: [MiniDraftComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('draft', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', animate('500ms ease-in'))
    ])
  ]
})

export class MobileDraftComponent {
  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;
  @Input() league: any;
}
