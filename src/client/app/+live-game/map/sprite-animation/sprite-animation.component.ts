import { Component, OnInit, Input, Renderer, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { SpritesComponent } from '../sprites/index';

@Component({
  moduleId: module.id,
  selector: 'app-sprite-animation',
  directives: [SpritesComponent],
  template: `
    <div #position
      ngClass="icons {{ team === 'radiant' ? 'radiant' : team === 'dire' ? 'dire' : 'roshan' }}">
      <app-sprites 
        [team]='team' 
        [heroId]='heroId'>
        </app-sprites>
    </div>
  `,
  styles: [
    `
      .icons {
        position: absolute;
        text-align: center;
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
        background: radial-gradient(ellipse at center, rgba(128,128,128,0.75) 0%,rgba(128,128,128,0) 75%);
        z-index: 5;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpriteAnimationComponent implements OnInit {
  @Input() team: boolean;
  @Input() heroId: number|string;
  @Input() posX: number;
  @Input() posY: number;
  @Input() oldPosX: number;
  @Input() oldPosY: number;
  @Input() index: number;

  @ViewChild('position') coordinates : ElementRef;
  @Input() respawnTimer: number;

  constructor(public renderer: Renderer) {}

  ngOnInit() {
    this.animateMovement();
    if (this.respawnTimer > 0) {
      this.animateDeath();
    }
  }
  /* 
  * if old pos X/Y exists set sprites to old pos then animate to new, else it is a fresh restart
  * Using this instead of onChanges since onChanges only captures actual values and not object references like int he *ngFor
  */
  animateMovement() {
    if (!Number.isNaN(this.oldPosX) && this.oldPosX !== undefined ) {
        //console.log('heroId ' + this.heroId + 'posX ' + this.posX, 'posY ' +  this.posY, 'X ' +  this.oldPosX, 'Y ' + this.oldPosY)
        //[this.oldPosX, this.oldPosY] = this.transformPosition(this.oldPosX, this.oldPosY)
        this.renderer.invokeElementMethod(
          this.coordinates.nativeElement,
          'animate',
          [
            [
              {left: this.oldPosX+'%', top: this.oldPosY +'%'},
              {left: this.posX+'%', top: this.posY +'%'}
            ],
            {
              duration: 2000,
              delay: 0,
              fill: 'forwards'
            }
          ]
        );
      } else {
        this.renderer.setElementStyle(this.coordinates.nativeElement, 'left', this.posX+'%');
        this.renderer.setElementStyle(this.coordinates.nativeElement, 'top', this.posY+'%');
      }
  }
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
          iterations: this.respawnTimer/3
        }
      ]
    );
  }
}
