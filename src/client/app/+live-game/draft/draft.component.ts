import { Component, Input } from '@angular/core';
import { ShortenName } from '../../pipes/index'

@Component({
  moduleId: module.id,
  selector: 'app-draft',
  templateUrl: 'draft.component.html',
  styleUrls: ['draft.component.css'],
  pipes: [
    ShortenName
  ]
})
export class DraftComponent {

  @Input() radiant: any;
  @Input() dire: any;
  @Input() radiantTeamName: string;
  @Input() direTeamName: string;
  
  smallerScreenSize: boolean;
  notCaptainsMode: any;

  constructor() {
    console.log('cons - DraftComponent');
  }
  ngOnInit() {
    // setTimeout(() => {
    //   console.log('here')
    //   this.radiant.picks = this.dire.picks.slice(-4);
    // }, 500 );
    // 1020 is  max of current css setup for draft
    if (window.innerWidth < 1020) {
      this.smallerScreenSize = true;
    }
    else {
      this.smallerScreenSize = false;
    }
  }
  ngDoCheck() {
    // this.dire.bans = this.dire.bans.slice(-3);
    // this.dire.picks = this.dire.picks.slice(-5);
  }
  onResize(event:any) {
    if (event.target.innerWidth < 1020) {
      console.log('less than')
      this.smallerScreenSize = true;
    }
    else {
      console.log('greater than')
      this.smallerScreenSize = false;
    }
  }
}
