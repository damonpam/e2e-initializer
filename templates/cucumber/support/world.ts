interface Product {
  kind: string;
  count: number;
}

declare module 'cucumber' {
  interface World {
    product: Product;
  }
}
