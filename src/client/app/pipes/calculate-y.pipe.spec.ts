/* tslint:disable:no-unused-variable */

import { CalculateYPipe } from './calculate-y.pipe';

export function main() {

  describe('Pipe: CalculateY', () => {
    let pipe: CalculateYPipe;
    let height = 556;
    let maxWdithHeight = 600;
    let testIntegers = [
        7999,
        6000,
        4000,
        2000,
        0,
        -2000,
        -4000,
        -6000,
        -7999
      ];

    beforeEach(() => {
      pipe = new CalculateYPipe();
    });

    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('transforms (possible) float to integer', () => {
      testIntegers.map(testData => {
        expect(pipe.transform(testData, height, maxWdithHeight)).toEqual(jasmine.any(Number));
      });
    });
    it(`transforms are < ${height} && > -1`, () => {
      testIntegers.map(testData => {
        // console.log(testData, pipe.transform(testData, height))
        expect(pipe.transform(testData, height, maxWdithHeight)).toBeLessThan(height);
        expect(pipe.transform(testData, height, maxWdithHeight)).toBeGreaterThan(-1);
      });
    });
  });
}
