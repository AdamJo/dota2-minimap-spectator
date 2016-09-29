import { CalculateXPipe } from './calculate-x.pipe';

describe('Pipe: CalculateX', () => {
  let pipe: CalculateXPipe;
  let width = 578;
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
    pipe = new CalculateXPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms (possible) float to integer', () => {
    testIntegers.map(testData => {
      expect(pipe.transform(testData, width, maxWdithHeight)).toEqual(jasmine.any(Number));
    });
  });

  it(`transforms are < ${width} && > -1`, () => {
    testIntegers.map(testData => {
      expect(pipe.transform(testData, width, maxWdithHeight)).toBeLessThan(width);
      expect(pipe.transform(testData, width, maxWdithHeight)).toBeGreaterThan(-1);
    });
  });
});
