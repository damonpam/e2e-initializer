import { Given, Then, When } from 'cucumber';

import { navigate, searchProducts } from '../../src/actions';
import { homePage, page, searchPageComponent, searchResults } from '../../src/questions';
import { expect } from '../../src/support/chai';

Given('I am in the home page',  function() {
  navigate.toHomePage();

});

When('I search for the product {string}', function(product) {
  searchProducts.byText(product);
});

Then('I should see the Amazon logo', async function() {
  expect(await homePage.isAmazonLogoDisplayed()).to.be.true;
});

Then('the search box should be empty', function() {
  expect(searchPageComponent.getSearchBoxText()).to.be.empty;
});

Then('the page title should be {string}', async function(title) {
  expect(await page.title()).to.be.equal(title);
});

Then('I should see {string} in the results', function(product) {
  const value = searchResults.searchedText();
  expect(value).to.be.equal(product);
});
