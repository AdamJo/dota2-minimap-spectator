/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SplitNumbersPipe } from './split-numbers.pipe';

export function main() {
  describe('Pipe: SplitNumbersPipe', () => {
    let pipe: SplitNumbersPipe;

    beforeEach(() => {
      pipe = new SplitNumbersPipe();
    });

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('transforms "11" to ["1","1"]', () => {
      expect(pipe.transform('11')).toEqual([1,1]);
    });

    it('transforms null to undefined', () => {
      expect(pipe.transform(null)).toEqual(undefined);
    });

    it('transforms "" to undefined', () => {
      expect(pipe.transform('')).toEqual(undefined);
    });

    it('transforms undefined to undefined', () => {
      expect(pipe.transform(undefined)).toEqual(undefined);
    });
  });
}
