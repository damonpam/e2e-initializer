import { Element } from '@wdio/sync';

import { BasePage } from './BasePage';

class HomePage extends BasePage {
  constructor(url = '') {
    super(url);
  }

  get manorLogo(): Element {
    return $('[alt="Manor Logo"]');
  }
}

export const homePage = new HomePage();
