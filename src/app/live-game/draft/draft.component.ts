import { Component, Input, ChangeDetectionStrategy, trigger,
  state,
  style,
  transition,
  animate  } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: 'draft.component.html',
  styleUrls: ['./draft.component.scss'],
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

export class DraftComponent {

  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;
  @Input() league: any;
}
