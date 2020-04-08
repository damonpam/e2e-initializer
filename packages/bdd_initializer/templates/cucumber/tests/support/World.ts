import { setWorldConstructor } from 'cucumber';

interface Product {
  count: number;
  kind: string;
}

declare module 'cucumber' {
  interface World {
    product: Product;
  }
}

setWorldConstructor({});
