import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-match',
  templateUrl: 'live-match.component.html',
  styleUrls: ['./live-match.component.scss']
})

export class LiveMatchComponent {
  @Input() match: any;

  ngOnInit() {
    console.log(this.match);
  }
}
