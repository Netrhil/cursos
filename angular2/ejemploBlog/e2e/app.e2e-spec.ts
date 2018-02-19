import { EjemploBlogPage } from './app.po';

describe('ejemplo-blog App', function() {
  let page: EjemploBlogPage;

  beforeEach(() => {
    page = new EjemploBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
