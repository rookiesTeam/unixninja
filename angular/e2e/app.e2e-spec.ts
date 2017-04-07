import { UnixninjaPage } from './app.po';

describe('unixninja App', function() {
  let page: UnixninjaPage;

  beforeEach(() => {
    page = new UnixninjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
