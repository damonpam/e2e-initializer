import { Given, Then, When } from 'cucumber';

import { expect } from '../../support/chai';

Given('I have {int} {word} in the basket', function(count: number, kind: string) {
  this.product = { count, kind };
});

When('I buy {int} more', function(bought: number) {
  this.product.count = this.product.count + bought;
});

Then(/^I should have (\d+) apples in the basket$/, function(total: number) {
  expect(this.product.count).to.be.equal(total);
  // eslint-disable-next-line no-console
  console.log(`I have total of ${this.product.count} ${this.product.kind}`);
});
