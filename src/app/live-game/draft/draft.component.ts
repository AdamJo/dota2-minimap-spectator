import { Component, Input, ChangeDetectionStrategy, trigger,
  state,
  style,
  transition,
  animate  } from '@angular/core';

import { Team, League, Series } from '../../services/index';

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
  @Input() radiant: Team;
  @Input() dire: Team;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;
  @Input() league: League;
  @Input() series: Series;
}
