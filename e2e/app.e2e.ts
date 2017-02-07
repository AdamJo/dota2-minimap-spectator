describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Mini Dota 2 Watcher';
    expect(subject).toEqual(result);
  });

});
