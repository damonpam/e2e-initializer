import { Element } from '@wdio/sync';

class SearchPageComponent {
  get searchBox(): Element {
    return $('[data-t-name="Epoqsearchbox"] input');
  }

  get searchButton(): Element {
    return $('[data-t-name="Epoqsearchbox"] button');
  }
}

export const searchPageComponent = new SearchPageComponent();
