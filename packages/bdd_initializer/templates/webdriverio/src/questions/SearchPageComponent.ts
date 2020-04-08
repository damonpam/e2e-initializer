import { searchPageComponent as _searchPageComponent } from '../page_objects';

class SearchPageComponent {
  public async getSearchBoxText(): Promise<string> {
    const searchBoxElement = await _searchPageComponent.searchBox();
    return searchBoxElement.getText();
  }
}

export const searchPageComponent = new SearchPageComponent();
