import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Players } from '../../../services/index';

@Component({
  selector: 'lg-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['./team-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TeamInfoComponent implements OnInit {
  @Input() side: string;
  @Input() team: Players;
  @Input() highlightPlayer: string;

  ngOnInit() {
    this.highlightPlayer = 'loading';
  }
}
