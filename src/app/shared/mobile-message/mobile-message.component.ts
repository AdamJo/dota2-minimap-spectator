import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'sh-mobile-message',
  template: `
    <div class="container" >
      <div class="mobile-message"  [@mobile]="waitTwoSeconds">
        MOBILE: Best viewed in LANDSCAPE mode!
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      min-width: 1102px;
    }
    .mobile-message {
      font-size: 1.5rem;

      text-align: center;
      line-height: 60px;

      white-space: nowrap;
      overflow: hidden;

      height: 60px;
      width: 1102px;
    }
  `],
  animations: [
    trigger('mobile', [
      state('load', style({
        background: '#080'
      })),
      state('done',   style({
        height: '0',
        background: '#000',
        display: 'none'
      })),
      transition('load => done', animate('800ms ease-out'))
    ])
  ]
})

export class MobileMessageComponent implements OnInit {
  waitTwoSeconds = 'load';

  ngOnInit() {
    setTimeout(() => {
      this.waitTwoSeconds = 'done';
    }, 3000);
  }
}
