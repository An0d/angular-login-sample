import { LoginSamplePage } from './app.po';

describe('login-sample App', function() {
  let page: LoginSamplePage;

  beforeEach(() => {
    page = new LoginSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
