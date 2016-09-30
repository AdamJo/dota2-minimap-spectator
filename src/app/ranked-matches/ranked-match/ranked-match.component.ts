import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranked-match',
  templateUrl: 'ranked-match.component.html',
  styleUrls: ['ranked-match.component.scss']
})
export class RankedMatchComponent {
  @Input() matches: any;

  constructor() { }

  ngOnInit() {
  }
}