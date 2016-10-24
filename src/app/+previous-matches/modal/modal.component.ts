import { Component, Input, Output, trigger, EventEmitter,
  transition, animate, style, state } from '@angular/core';
import { MatchHistory } from '../../services/index';

@Component({
  selector: 'pm-modal',
  template: `
  <div class="container" (click)="closeOverlay()">
  </div>
  <div class="modal" [@entering]>
    <div class="match">
      <div class="league">
        {{match.league_name}}
      </div>
      <div class="match-names">
        <div
          ngClass="{{match.radiant_win ? 'inactive' : 'active'}}"
        >{{match.dire_name}}</div>
        <span>vs</span>
        <div 
          ngClass="{{match.radiant_win ? 'active' : 'inactive'}}"
        >{{match.radiant_name}}</div>
      </div>
    </div>
    <div class="match-info">
      <div>
        Match ID: {{match.match_id}}
      </div>
    </div>
  </div>
  `,
  styleUrls: ['modal.component.css'],
  animations: [
    trigger('entering', [
      transition(':enter', [
        style({
          opacity: .8,
          transform: 'scale(.95)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        style({
          opacity: .8,
          transform: 'scale(.95)',
          display: 'none'
        }),
        animate('0.2s ease-in')
      ])
    ])
  ]
})

export class ModalComponent {
  @Input() match: number;
  @Output() visibleOutput = new EventEmitter();

  // un expands menu when clicked outside of the area.
  closeOverlay() {
    this.visibleOutput.emit(false);
  }
}
