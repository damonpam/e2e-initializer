import { searchPageComponent } from '../page_objects';

class SearchProducts {
  public byText(text: string): void {
    searchPageComponent.searchBox.setValue(text);
    searchPageComponent.searchButton.click();
  }
}

export const searchProducts = new SearchProducts();
