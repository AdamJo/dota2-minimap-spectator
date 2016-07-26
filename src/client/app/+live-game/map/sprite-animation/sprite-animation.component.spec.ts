import { beforeEachProviders, inject } from '@angular/core/testing';
import { Renderer } from '@angular/core';
import { SpriteAnimationComponent } from './sprite-animation.component';

export function main() {
  describe('Sprites-Animation Component', () => {

    beforeEachProviders(() => [
      SpriteAnimationComponent,
      Renderer
    ]);

    it('should create an instance', inject([ SpriteAnimationComponent ], (app:any) => {
      expect(app).toBeTruthy();
    }));
  });
}
