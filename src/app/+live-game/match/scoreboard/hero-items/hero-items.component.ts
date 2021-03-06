import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lg-hero-items',
  templateUrl: 'hero-items.component.html',
  styleUrls: ['./hero-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroItemsComponent {
  @Input() items: Array<string>;
}
