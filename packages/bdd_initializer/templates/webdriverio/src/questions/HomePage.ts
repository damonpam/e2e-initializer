import { homePage as _homePage } from '../page_objects';

class HomePage {
  public async isAmazonLogoDisplayed(): Promise<boolean> {
    const amazonLogo = await _homePage.amazonLogo();
    return amazonLogo.isDisplayed();
  }
}

export const homePage = new HomePage();
