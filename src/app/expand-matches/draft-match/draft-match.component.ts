import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-draft-match',
  templateUrl: 'draft-match.component.html',
  styleUrls: ['./draft-match.component.scss']
})

export class DraftMatchComponent {
  @Input() match: any;
  @Input() index: number;
  @Output('change') userIndexPick = new EventEmitter();
  @Input() didGameStart: boolean;

  sendToParent() {
    this.userIndexPick.emit({
      index: this.index
    })
  }
}
