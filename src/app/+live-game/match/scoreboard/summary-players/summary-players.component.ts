import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'lg-summary-players',
  templateUrl: 'summary-players.component.html',
  styleUrls: [ './summary-players.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryPlayersComponent implements OnChanges {
  @Input()
  direData;
  @Input()
  radiantData;
  @Input()
  sortValue;
  @Input()
  title;

  mvpDire: any;
  mvpRadiant: any;

  ngOnChanges(changes) {
    this.mvpDire = this.findMaxValue(this.sortValue, this.direData);
    this.mvpRadiant = this.findMaxValue(this.sortValue, this.radiantData);
  }

  // tslint:disable:max-line-length
  // http://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
  // tslint:enable:max-line-length
  findMaxValue(value, data) {
    let values = data.map(player => player[value]);
    let maxValue = Math.max.apply(
      Math,
      data.map(player => {
        return player[value];
      })
    );
    return data[values.indexOf(maxValue)];
  }
}
