import { Component, OnChanges, Input,
  ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lg-summary-graph',
  templateUrl: 'summary-graph.component.html',
  styleUrls: ['./summary-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SummaryGraphComponent implements OnChanges {
  @Input() browserCheck: boolean;
  @Input() radiantData;
  @Input() direData;
  @Input() sortValue;
  @Input() duration;

  @ViewChild('position') percentage: ElementRef;

  accPercent: number = 0;
  accPercentPrevious: number = 0;
  accPercentage: number = 0;

  accData: number = 0;
  accDataPrevious: number = 0;

  advantage: string = 'neutral';
  advantagePrevious: string = 'neutral';

  constructor() { }

  ngOnChanges(changes) {
    let isFirstLoad = changes.radiantData.previousValue !== undefined;
    let accTemp;
    let radiantAccTemp;
    let direAccTemp;
    let direAccCurrentTemp = changes.direData.currentValue
      .map(x => x[this.sortValue])
      .reduce( (max, cur ) => {
        return max + cur;
    });

    let radiantAccCurrentTemp = changes.radiantData.currentValue
      .map(x => x[this.sortValue])
      .reduce( (max, cur ) => {
        return max + cur;
    });

    let accCurrentTemp = direAccCurrentTemp - radiantAccCurrentTemp;
    [
      this.accData,
      this.advantage,
      this.accPercent
    ] = this.calculateAdvantage(direAccCurrentTemp, radiantAccCurrentTemp, accCurrentTemp);

    if (isFirstLoad) {
      direAccTemp = changes.direData.previousValue
        .map(x => x[this.sortValue])
        .reduce( (max, cur ) => {
          return max + cur;
      });

      radiantAccTemp = changes.radiantData.previousValue
        .map(x => x[this.sortValue])
        .reduce( (max, cur ) => {
          return max + cur;
      });

      accTemp = direAccTemp - radiantAccTemp;
      [
        this.accDataPrevious,
        this.advantagePrevious,
        this.accPercentPrevious
      ] = this.calculateAdvantage(direAccTemp, radiantAccTemp, accTemp);
    }
    if (this.sortValue === 'xp_per_min') {
      this.accData = this.accData * Math.floor(this.duration / 60);
    }

    this.accPercentage = Math.abs(this.accPercent);
    if (this.browserCheck && this.accPercentPrevious && this.accPercent) {
      this.animateBar();
    } else {
      this.percentage.nativeElement.style.left = this.accPercent / 2 + '%';
    }
  }

  calculateAdvantage(direData, radiantData, accData): [number, string, number] {
    let direction: string;
    let percentage: number;
    let amount: number;

    if (accData === 0) {
      direction = 'neutral';
      percentage = 0;
      amount = 0;
    } else if (accData > 1) {
      direction = 'dire';
      percentage = -1 * Math.floor((direData / radiantData) * 100) % 100;
      if (percentage <= -95) {
        percentage = -95;
      }
      amount = direData - radiantData;
    } else if (accData < 1) {
      direction = 'radiant';
      percentage = Math.floor((radiantData / direData) * 100) % 100;
      if (percentage >= 95) {
        percentage = 95;
      }

      amount = direData - radiantData;
    } else {
      direction = 'neutral';
      percentage = 0;
      amount = 0;
    }

    if (isNaN(percentage)) {
      percentage = 0;
    }
    if (isNaN(amount)) {
      amount = 0;
    }

    return ([Math.abs(amount), direction, percentage]);
  }

  animateBar() {
    this.percentage.nativeElement.animate(
      [
        {left: this.accPercentPrevious / 2 + '%'},
        {left: this.accPercent / 2 + '%'}
      ],
      {
        duration: 1000,
        delay: 0,
        fill: 'forwards'
      }
    );
  }
}
