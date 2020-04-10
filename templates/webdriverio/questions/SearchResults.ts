import { productSearchResults } from '../page_objects';

class SearchResults {
  public searchedText(): string {
    return productSearchResults.searchTerm.getText();
  }
}

export const searchResults = new SearchResults();
