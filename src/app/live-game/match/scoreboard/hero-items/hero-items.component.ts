import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-items',
  templateUrl: 'hero-items.component.html',
  styleUrls: ['./hero-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroItemsComponent {
  @Input() items: Array<string>;
}
