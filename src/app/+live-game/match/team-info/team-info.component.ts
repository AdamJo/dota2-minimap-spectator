import { Component, Input, OnInit } from '@angular/core';
import { Players } from '../../../services/index';

@Component({
  selector: 'lg-team-info',
  templateUrl: 'team-info.component.html',
  styleUrls: ['./team-info.component.css']
})

export class TeamInfoComponent implements OnInit {
  @Input() side: string;
  @Input() team: Players;
  @Input() highlightPlayer: string;

  ngOnInit() {
    this.highlightPlayer = 'loading';
  }
}
