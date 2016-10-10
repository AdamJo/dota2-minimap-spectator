import { SplitNumbersPipe } from './split-numbers.pipe';

describe('Pipe: SplitNumbers', () => {
  let pipe: SplitNumbersPipe;

  beforeEach(() => {
    pipe = new SplitNumbersPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "11" an Array', () => {
    expect(pipe.transform('11')).toEqual(jasmine.any(Array));
  });

  it('should transform "11" to ["1","1"]', () => {
    expect(pipe.transform('11')).toEqual([1, 1]);
  });

  it('should transform null to undefined', () => {
    expect(pipe.transform(null)).toEqual(undefined);
  });

  it('should transform "" to undefined', () => {
    expect(pipe.transform('')).toEqual(undefined);
  });

  it('should transform undefined to undefined', () => {
    expect(pipe.transform(undefined)).toEqual(undefined);
  });
});
