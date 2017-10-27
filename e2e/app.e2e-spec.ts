import { HomeProjectUiAppPage } from './app.po';

describe('home-project-ui-app App', function() {
  let page: HomeProjectUiAppPage;

  beforeEach(() => {
    page = new HomeProjectUiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
