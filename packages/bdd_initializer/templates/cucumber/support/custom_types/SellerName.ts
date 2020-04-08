import { defineParameterType, World } from 'cucumber';
defineParameterType({
  name: 'SellerName',
  regexp: /(\w+)/,
  transformer: function (this: World, name: string): string {
    return name.concat(this.timestamp);
  }
});
