import { inject } from '@angular/core/testing';
import { MapComponent } from './map.component';

export function main() {
  describe('Map Component', () => {

    it('should exist be created', inject([ MapComponent ], (app: any) => {
      expect(app).toBeTruthy();
    }));

    it('should have a width', inject([ MapComponent ], (app: any) => {
      expect(app.width).toEqual(jasmine.any(Number));
    }));

    it('should have a height', inject([ MapComponent ], (app: any) => {
      expect(app.height).toEqual(jasmine.any(Number));
    }));
  });
}
