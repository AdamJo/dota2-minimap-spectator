import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-draft-match',
  templateUrl: 'draft-match.component.html',
  styleUrls: ['./draft-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
