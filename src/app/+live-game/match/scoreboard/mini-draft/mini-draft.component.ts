import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Team } from '../../../../services/index';

@Component({
  selector: 'lg-mini-draft',
  templateUrl: 'mini-draft.component.html',
  styleUrls: ['./mini-draft.component.css'],
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

export class MiniDraftComponent {
  @Input() side: string;
  @Input() team: Team;
}
