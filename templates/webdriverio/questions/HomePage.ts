import { homePage as _homePage } from '../page_objects';

class HomePage {
  public isManorLogoDisplayed(): boolean {
    return _homePage.manorLogo.isDisplayed();
  }
}

export const homePage = new HomePage();
