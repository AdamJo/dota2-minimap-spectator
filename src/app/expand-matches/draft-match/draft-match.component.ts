import { Component, Input, Output, EventEmitter, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  selector: 'app-draft-match',
  templateUrl: 'draft-match.component.html',
  styleUrls: ['./draft-match.component.scss'],
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

export class DraftMatchComponent {
  @Input() match: any;
  @Input() index: number;
  @Output('change') userIndexPick = new EventEmitter();
  @Input() didGameStart: boolean;

  sendToParent() {
    console.log(this.match, this.index)
    this.userIndexPick.emit({
      index: this.index
    })
  }
}
