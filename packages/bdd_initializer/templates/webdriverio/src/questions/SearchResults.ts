import { productSearchResults } from '../page_objects';

class SearchResults {
  public async searchedText(): Promise<string> {
    const searchTerm = await productSearchResults.searchTerm();
    return searchTerm.getText();
  }
}

export const searchResults = new SearchResults();
