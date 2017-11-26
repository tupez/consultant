import { AppPage } from './app.po';

describe('consultants App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display bar message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Consultants');
  });
});
