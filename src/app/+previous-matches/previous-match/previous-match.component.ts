import { Component, Input } from '@angular/core';

import { MatchHistory } from '../../services/index'

@Component({
  selector: 'pm-previous-match',
  templateUrl: 'previous-match.component.html',
  styleUrls: ['previous-match.component.css']
})
export class PreviousMatchComponent {
  @Input() matches: any;
  splitMatches: any;

  constructor() {
    this.splitMatches = [];
  }

  ngOnChanges(changes) {
    if (this.matches.length > 26) {
      this.splitMatches = this.matches.slice(26, 52)
      this.matches = this.matches.slice(0,26)
      console.log(this.splitMatches.length)
      console.log(this.matches.length)
    } else {
      this.splitMatches = []
    }
  }
}
