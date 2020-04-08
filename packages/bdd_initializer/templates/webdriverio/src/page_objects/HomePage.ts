import { BasePage } from './BasePage';
import {Element} from "webdriverio";

class HomePage extends BasePage {
  constructor(url = "www.amazon.com") {
    super(url);
  }

  async amazonLogo(): Promise<Element> {
    return $('.nav-logo-base');
  }

}

export const homePage = new HomePage();
