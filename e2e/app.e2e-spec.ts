import { Dota2ProjectPage } from './app.po';

describe('dota2-project App', function() {
  let page: Dota2ProjectPage;

  beforeEach(() => {
    page = new Dota2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
