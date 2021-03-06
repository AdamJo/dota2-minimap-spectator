import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'em-player-value',
  template: `
    <div [@newPlayerValue]="trigger" class="respawn">
      <div [@innerSwitch]="valueSwitch" class="value">{{playerValue}}</div>
    </div>
    `,
  styles: [`
    .respawn {
      border: 1px solid #000;
      background-color: rgba(0, 0, 0, .5);
      height: 46px;
      width: 82.27px;
      position: absolute;
      top: 0;
    }

    .value {
      overflow: hidden;
      text-overflow: clipped;
      white-space: nowrap;
      max-width: 82.27px;
      min-width: 82.27px;

      color: #ddd;
      font-size: .8rem;
      height: 46px;
      vertical-align: middle;
      text-align: center;
      display: table-cell;
    }
  `],
  animations: [
    trigger('newPlayerValue', [
      state('on',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      ),
      state('off',
        style({
          opacity: 0,
          transform: 'scale(.95)'
        })
      ),
      transition('on <=> off', animate('0.2s ease-in')),
    ]),
    trigger('innerSwitch', [
      state('fromSwitch',
        style({
          opacity: 1
        })
      ),
      state('toSwitch',
        style({
          opacity: 1
        })
      ),
      transition('toSwitch <=> fromSwitch', [
        style({
          opacity: .4,
        }),
        animate('300ms ease-in')
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayerValueComponent implements OnChanges {
  @Input() playerValue: string;
  trigger: string;
  valueSwitch: string;

  ngOnChanges(changes) {
    if (this.playerValue === 'disabled') {
      this.trigger = 'off';
      this.playerValue = '';
      this.valueSwitch = '';
    } else {
      this.trigger = 'on';
      this.valueSwitch = this.valueSwitch === 'toSwitch' ? 'fromSwitch' : 'toSwitch';
    }
  }
}
