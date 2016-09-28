import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-series',
  template: `
    <div 
      class="series-games
      {{teamSide === 'dire' ? 'series-dire' : 'series-radiant'}}">
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
      margin-bottom: 8px;
      height: 30px;
      width: 40px;
    }

    .series-radiant {
      justify-content: flex-end;
      margin-right: 10px;
    }

    .series-dire {
      justify-content: flex-start;
      margin-left: 10px;
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
  @Input() gameSeries: any;
  @Input() teamSide: string;
}
