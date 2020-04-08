import {Element} from "webdriverio";

class SearchPageComponent {
  async searchBox(): Promise<Element> {
    return $('#twotabsearchtextbox');
  }

  async searchButton(): Promise<Element> {
    return $('.nav-search-submit-text');
  }
}

export const searchPageComponent = new SearchPageComponent();
