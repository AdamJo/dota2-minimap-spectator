import { beforeEachProviders, inject } from '@angular/core/testing';
import { SpritesComponent } from './sprites.component';

export function main() {
  describe('Sprites Component', () => {

    beforeEachProviders(() => [
      SpritesComponent
    ]);

    it('should create an instance', inject([ SpritesComponent ], (app:any) => {
      expect(app).toBeTruthy();
    }));
  });
}
