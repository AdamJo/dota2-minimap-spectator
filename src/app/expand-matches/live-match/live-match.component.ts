import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-live-match',
  templateUrl: 'live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})

export class LiveMatchComponent {
  @Input() match: any;
  @Input() index: number;
  @Output('change') userIndexPick = new EventEmitter();

  sendToParent() {
    this.userIndexPick.emit({
      index: this.index
    })
  }
}
