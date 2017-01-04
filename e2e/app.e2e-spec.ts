import { Angular2MaterialKeyboardPage } from './app.po';

describe('angular2-material-keyboard App', function() {
  let page: Angular2MaterialKeyboardPage;

  beforeEach(() => {
    page = new Angular2MaterialKeyboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
