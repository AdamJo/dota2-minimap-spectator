import { Component, OnChanges, Input, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lg-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnChanges {
  @Input() radiantData;
  @Input() direData;
  @Input() sortValue;
  @ViewChild('position') percentage: ElementRef;

  accPercentCurrent: number = 50;
  accPercentPrevious: number = 50;

  accDataCurrent: number = 0;
  accDataPrevious: number = 0;

  arrowDirectionCurrent: string = 'neutral';
  arrowDirectionPrevious: string = 'neutral';

  percentageDifference: number = 0;

  constructor(public renderer: Renderer) { }

  ngOnChanges(changes) {
    let accTemp
    let radiantAccTemp;
    let direAccTemp;

    let direAccCurrentTemp = changes.direData.currentValue
      .map(x => x[this.sortValue])
      .reduce( (max, cur ) => {
        return max+cur;
    });

    let radiantAccCurrentTemp = changes.radiantData.currentValue
      .map(x => x[this.sortValue])
      .reduce( (max, cur ) => {
        return max+cur;
    });

    let accCurrentTemp = direAccCurrentTemp - radiantAccCurrentTemp;
    [
      this.accDataCurrent,
      this.arrowDirectionCurrent,
      this.accPercentCurrent
    ] = this.calculateAdvantage(direAccCurrentTemp, radiantAccCurrentTemp, accCurrentTemp)

    if (Object.keys(changes.radiantData.previousValue)[0] !== 'toString') {
      direAccTemp = changes.direData.previousValue
        .map(x => x[this.sortValue])
        .reduce( (max, cur ) => {
          return max+cur;
      });

      radiantAccTemp = changes.radiantData.previousValue
        .map(x => x[this.sortValue])
        .reduce( (max, cur ) => {
          return max+cur;
      });

      accTemp = direAccTemp - radiantAccTemp;
      [
        this.accDataPrevious,
        this.arrowDirectionPrevious,
        this.accPercentPrevious
      ] = this.calculateAdvantage(direAccTemp, radiantAccTemp, accTemp)
    }

    this.animateBar()
  }

  calculateAdvantage(direData, radiantData, accData): [number, string, number] {
    let direction: string;
    let percentage: number;
    let amount: number;

    if (accData === 0) {
      direction = 'neutral';
      percentage = 0;
      amount = 0
    } else if (accData > 1) {
      direction = 'dire';
      percentage = Math.floor((direData / radiantData)*100) % 100;
      amount = direData - radiantData;
    } else if (accData < 1) {
      direction = 'radiant';
      percentage = -1*(Math.floor(((direData / radiantData)-1)*100))
      amount = direData - radiantData;
    } else {
      direction = 'neutral';
      percentage = 0;
      amount = 0
    }
    return ([Math.abs(amount), direction, percentage])
  }
  
  animateBar() {
    console.log(this.accPercentPrevious, this.accPercentCurrent)
    // this.renderer.invokeElementMethod(
    //   this.percentage.nativeElement,
    //   'animate',
    //   [
    //     [
    //       {left: this.accPercentPrevious + '%'},
    //       {left: this.accPercentCurrent + '%'}
    //     ],
    //     {
    //       duration: 2000,
    //       delay: 0,
    //       fill: 'forwards'
    //     }
    //   ]
    // )
  }
}

