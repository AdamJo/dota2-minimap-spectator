import { Component, OnInit, Input, Renderer, ElementRef, ViewChild, ChangeDetectionStrategy,
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate } from '@angular/core';

@Component({
  selector: 'lg-sprite-animation',
  template: `
    <div class="animation icons"
      #position
      (mouseenter)=toggle()
      (mouseleave)=toggle()
      [@shrink]='shrink'
      [@ultimateGo]='ultimate'
      ngClass="{{ team === 'radiant' ? 'radiant' : team === 'dire' ? 'dire' : 'roshan' }}">
      <lg-sprites
        [team]='team' 
        [heroId]='heroId'>
        </lg-sprites>
    </div>
  `,
  styles: [
    `
      .icons {
        position: absolute;
        text-align: center;
        will-change: transform;
        z-index: 10;
      }
      .radiant, .dire {
        border-radius: 25px;
        padding-top: 4px;
        width: 38px;
        height: 38px;
      }
      .radiant {
        background: radial-gradient(ellipse at center, rgba(0,255,0,1) 0%,rgba(0,255,0,0) 75%);
      }
      .dire {
        background: radial-gradient(ellipse at center, rgba(255,0,0,1) 0%,rgba(255,0,0,0) 75%); 
      }
      .roshan {
        border-radius: 25px;
        padding-top: 4px;
        background: 
          radial-gradient(ellipse at center, rgba(128,128,128,0.75) 0%,rgba(128,128,128,0) 75%);
        z-index: 5;
      }
    `
  ],
  animations: [
    trigger('shrink', [
      state('regular', style({
        transform: 'scale(1)'
      })),
      state('small', style({
        transform: 'scale(.5)'
      })),
      transition('small <=> regular', animate('500ms ease'))
    ]),
    trigger('ultimateGo', [
      transition('void => go', [
        animate('1s', keyframes([
          style({transform: 'scale(.9)'}),
          style({transform: 'scale(1.5)'}),
          style({transform: 'scale(.7)'}),
          style({transform: 'scale(1)'})
        ]))
      ])
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpriteAnimationComponent implements OnInit {
  @Input() team: string;
  @Input() heroId: string;
  @Input() posX: number;
  @Input() posY: number;
  @Input() oldPosX: number;
  @Input() oldPosY: number;
  @Input() ultimateUsed: boolean;

  @ViewChild('position') coordinates: ElementRef;
  @Input() respawnTimer: number;

  shrink = 'regular';
  ultimate:string;

  constructor(public renderer: Renderer) {
  }

  ngOnInit() {
    if (this.ultimateUsed) {
      this.ultimate = 'go';
    }

    this.renderer.setElementStyle(this.coordinates.nativeElement, 'left', this.posX + '%');
    this.renderer.setElementStyle(this.coordinates.nativeElement, 'top', this.posY + '%');
    this.animateMovement();
    if (this.respawnTimer > 0) {
      this.animateDeath();
    }
  }
  /* 
  * if old pos X/Y exists set sprites to old pos then animate to new, else it is a fresh restart
  * Using this instead of onChanges since onChanges only captures actual values and 
  * not object references like int he *ngFor
  */
  animateMovement() {

    if (!Number.isNaN(this.oldPosX) && this.oldPosX !== undefined ) {
        this.renderer.invokeElementMethod(
          this.coordinates.nativeElement,
          'animate',
          [
            [
              {left: this.oldPosX + '%', top: this.oldPosY + '%'},
              {left: this.posX + '%', top: this.posY + '%'}
            ],
            {
              duration: 2000,
              delay: 0,
              fill: 'forwards'
            }
          ]
        );
      } else {
        this.renderer.setElementStyle(this.coordinates.nativeElement, 'left', this.posX + '%');
        this.renderer.setElementStyle(this.coordinates.nativeElement, 'top', this.posY + '%');
      }
  }
  // changes opacity for death animation
  animateDeath() {
    this.renderer.invokeElementMethod(
      this.coordinates.nativeElement,
      'animate',
      [
        [
          {opacity: .75},
          {opacity: .25},
          {opacity: .75}
        ],
        {
          duration: 3000,
          delay: 0,
          iterations: this.respawnTimer / 3
        }
      ]
    );
  }

  // shrinks and exands hero sprites
  toggle() {
    this.shrink = this.shrink === 'small' ? 'regular' : 'small';
  }
}
