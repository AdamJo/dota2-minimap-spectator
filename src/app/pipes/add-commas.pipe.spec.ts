import { AddCommasPipe } from './add-commas.pipe';

describe('Pipe: AddCommas', () => {
  let pipe: AddCommasPipe;

  beforeEach(() => {
    pipe = new AddCommasPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a string', () => {
    expect(pipe.transform(1000)).toEqual(jasmine.any(String));
  });

  it('should transform 1000 -> 1,000', () => {
    expect(pipe.transform(1000)).toEqual('1,000');
  });

  it('should transform 10000 -> 10,000', () => {
    expect(pipe.transform(10000)).toEqual('10,000');
  });

  it('should transform 100000 -> 100,000', () => {
    expect(pipe.transform(100000)).toEqual('100,000');
  });
});
