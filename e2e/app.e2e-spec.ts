import { Angular2GoogleMapPage } from './app.po';

describe('angular2-google-map App', function() {
  let page: Angular2GoogleMapPage;

  beforeEach(() => {
    page = new Angular2GoogleMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
