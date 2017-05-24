import { AngularGoogleBookApiPage } from './app.po';

describe('angular-google-book-api App', () => {
  let page: AngularGoogleBookApiPage;

  beforeEach(() => {
    page = new AngularGoogleBookApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
