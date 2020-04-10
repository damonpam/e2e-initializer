import { Element } from '@wdio/sync';

class ProductSearchResults {
  private readonly productList = '.o-productlist';

  get searchTerm(): Element {
    return $(`${this.productList} .epoq_search_term`);
  }
}

export const productSearchResults = new ProductSearchResults();
