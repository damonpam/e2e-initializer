import { searchPageComponent } from '../page_objects';

class SearchProducts {
  public async byText(text: string): Promise<void> {
    const searchBoxElement = await searchPageComponent.searchBox();
    const searchButton = await searchPageComponent.searchButton();
    await searchBoxElement.setValue(text);
    await searchButton.click();
  }
}

export const searchProducts = new SearchProducts();
