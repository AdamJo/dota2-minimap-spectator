import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previous-match',
  templateUrl: 'previous-match.component.html',
  styleUrls: ['previous-match.component.scss']
})
export class PreviousMatchComponent {
  @Input() match: any;
  @Input() sortValue: any;
  direWinner: any;
  radiantWinner: any;

  ngOnInit() {
    if (this.match.radiant_win) {
      this.radiantWinner = true;
      this.direWinner = false;
    } else {
      this.radiantWinner = false;
      this.direWinner = true;
    }
  }
}
