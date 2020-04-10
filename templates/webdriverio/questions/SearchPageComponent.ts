import { searchPageComponent as _searchPageComponent } from '../page_objects';

class SearchPageComponent {
  public getSearchBoxText(): string {
    return _searchPageComponent.searchBox.getText();
  }
}

export const searchPageComponent = new SearchPageComponent();
