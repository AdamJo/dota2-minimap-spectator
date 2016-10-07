import { Component, Input } from '@angular/core';
import { Series } from '../../services/index';
@Component({
  selector: 'app-series',
  template: `
    <div 
      class="series-games">
      <div 
        ngClass="series {{wins !== -1 ? 'active' : 'inactive'}}"
        *ngFor="let wins of gameSeries">
      </div>
    </div>
  `,
  styles: [`
    .series-games {
      align-items: center;
      display: flex;
      margin-top: 8px;
      margin-left: 15px;
      margin-right: 15px;
    }

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
  `]
})

export class SeriesComponent {
  @Input() gameSeries: Series;
}
