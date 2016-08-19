import { Component, Input, ChangeDetectionStrategy, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-mini-draft',
  templateUrl: 'mini-draft.component.html',
  styleUrls: ['mini-draft.component.css'],
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
  @Input() side: any;
  @Input() team: any;

  // ngOnInit() {
  // this.side = this.side[0].toUpperCase() + this.side.slice(1))
  // }
}