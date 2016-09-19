import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-series',
  template: `
    <div class="series-games">
      <div 
        ngClass="series {{wins !== -1 ? 'active' : 'inactive'}}"
        *ngFor="let wins of gameSeries.dire_series_wins">
      </div>
    </div>
  `,
  styles: [`
    .series {
      border: 1px solid #000;
      height: 20px;
      margin: 0 2px;
      outline: 1px solid transparent;
      transform: skew(-15deg);
      width: 10px;
    }

    .active {
      background: #b8860b;
    }

    .inactive {
      background: linear-gradient(#211602, #935c08 50%, #211602);
    }

    .series-games {
      align-items: center;
      display: flex;
      margin-bottom: 3px;
      margin-left: 15px;
      width: 40px;
    }
  `]
})

export class SeriesComponent {
  @Input() gameSeries: any;
}
