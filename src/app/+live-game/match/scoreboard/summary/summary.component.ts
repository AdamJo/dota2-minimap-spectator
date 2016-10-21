import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lg-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {
  @Input() radiantData;
  @Input() direData;
  accData: number;
  arrowDirection: string;
  percentageDifference: number;

  constructor() { }

  ngOnInit() { 

   }

  ngOnChanges() {
    let radiantAccData = this.radiantData
      .map(x => x.net_worth)
      .reduce( (max, cur ) => {
        return max+cur;
    });

    let direAccData = this.direData
      .map(x => x.net_worth)
      .reduce( (max, cur ) => {
        return max+cur;
    });

    this.accData = direAccData - radiantAccData;
    console.log(this.accData);
    this.percentageDifference = (direAccData / radiantAccData)
    console.log(this.percentageDifference);

    if (this.accData > 1) {
      console.log('dire')
      this.arrowDirection = 'dire';
    } else if (this.accData < 1) {
      this.arrowDirection = 'radiant';
      console.log('dire')
      this.accData  = Math.abs(this.accData);
    } else {
      this.arrowDirection = 'neutral';
    }
  }
}
