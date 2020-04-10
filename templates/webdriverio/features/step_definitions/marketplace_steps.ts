import { Given, Then, When } from 'cucumber';

import { navigate, searchProducts } from '../../actions';
import { homePage, page, searchPageComponent, searchResults } from '../../questions';
import { expect } from '../../support/chai';

Given('I am in the home page', function() {
  navigate.toHomePage();
});

When('I search for the product {string}', function(product) {
  searchProducts.byText(product);
});

Then('I should see the Manor logo', function() {
  expect(homePage.isManorLogoDisplayed()).to.be.true;
});

Then('the search box should be empty', function() {
  expect(searchPageComponent.getSearchBoxText()).to.be.empty;
});

Then('the page title should be {string}', function(title) {
  expect(page.title()).to.be.equal(title);
});

Then('I should see {string} in the results', function(product) {
  const value = searchResults.searchedText();
  expect(value).to.be.equal(product);
});
