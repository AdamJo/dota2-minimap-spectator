import { Component, Directive, Input, Renderer, ElementRef, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';

import { SpritesComponent } from '../sprites/index'

@Component({
  moduleId: module.id,
  selector: 'app-sprite-animation',
  templateUrl: `
  
  `
})
export class SpriteAnimationComponent {
  @ViewChild('sprite') temp : any
  @Input() posX: number;
  @Input() posY: number;
  @Input() oldPosX: number;
  @Input() oldPosY: number;
  
  constructor(public renderer: Renderer, private viewContainer: ViewContainerRef) {

  }
  ngOnInit() {
    console.log(this.posX, this.posY, this.oldPosX, this.oldPosY)
    console.log(this.temp);
    console.log(this.temp);
    
  }

  ngAfterViewInit() {
  }
  ngAfterViewChecked() {

  }

}