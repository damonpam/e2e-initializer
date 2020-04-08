import {Element} from "webdriverio";

class ProductSearchResults {
  private readonly productList = '.o-productlist';

  async searchTerm(): Promise<Element> {
    return $(`${this.productList} .epoq_search_term`);
  }
}

export const productSearchResults = new ProductSearchResults();
