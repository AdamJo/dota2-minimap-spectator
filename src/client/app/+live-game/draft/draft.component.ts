import { Component, Input, OnInit } from '@angular/core';

import { MobileDraftComponent } from './mobile-draft/index';

@Component({
  moduleId: module.id,
  selector: 'app-draft',
  templateUrl: 'draft.component.html',
  styleUrls: ['draft.component.css'],
  directives: [
    MobileDraftComponent
  ]
})

export class DraftComponent implements OnInit {

  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;

  smallerScreenSize: boolean;

  constructor() {
    console.log('cons - DraftComponent');
  }

  ngOnInit() {
    // 1020 is  max of current css setup for draft
    if (window.innerWidth < 1000) {
      this.smallerScreenSize = true;
    } else {
      this.smallerScreenSize = false;
    }
  }

  onResize(event:any) {
    if (event.target.innerWidth < 1000) {
      this.smallerScreenSize = true;
    } else {
      this.smallerScreenSize = false;
    }
  }
}