import { Component, Input, OnChanges } from '@angular/core';
import { MatchHistory } from '../../services/index';

@Component({
  selector: 'pm-previous-match',
  templateUrl: 'previous-match.component.html',
  styleUrls: ['previous-match.component.scss']
})
export class PreviousMatchComponent implements OnChanges {
  @Input() matches: Array<MatchHistory>;
  overlayMatch: any;
  splitMatches: any;
  toggleMatch: boolean = false;

  constructor() {
    this.splitMatches = [];
  }

  ngOnChanges(changes) {
    if (this.matches.length > 20) {
      this.splitMatches = this.matches.slice(20, 40);
      this.matches = this.matches.slice(0, 20);
    } else {
      this.splitMatches = [];
    }
  }

  overlay(event) {
    this.toggleMatch = !this.toggleMatch;
    this.overlayMatch = event;
  }

  closeOverlay(event) {
    this.toggleMatch = false;
  }
}
