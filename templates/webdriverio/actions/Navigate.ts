import { homePage } from '../page_objects';

class Navigate {
  public toHomePage(): void {
    browser.navigateTo(homePage.url);
  }
}

export const navigate = new Navigate();
