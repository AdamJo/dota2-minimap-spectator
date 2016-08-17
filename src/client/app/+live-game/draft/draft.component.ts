import { Component, Input, OnInit, ChangeDetectionStrategy, trigger,
  state,
  style,
  transition,
  animate  } from '@angular/core';

import { MobileDraftComponent } from './mobile-draft/index';

@Component({
  moduleId: module.id,
  selector: 'app-draft',
  templateUrl: 'draft.component.html',
  styleUrls: ['draft.component.css'],
  directives: [
    MobileDraftComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('draft', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', animate('500ms ease-in'))
    ])
  ]
})

export class DraftComponent implements OnInit {

  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;
  @Input() league: any;

  smallerScreenSize: boolean;

  ngOnInit() {
    // this.dire.picks = this.dire.picks.slice(3);
    // 800 is  max of current css setup for draft
    if (window.innerWidth < 800) {
      this.smallerScreenSize = true;
    } else {
      this.smallerScreenSize = false;
    }
  }

  onResize(event:any) {
    if (event.target.innerWidth < 800) {
      this.smallerScreenSize = true;
    } else {
      this.smallerScreenSize = false;
    }
  }
}
