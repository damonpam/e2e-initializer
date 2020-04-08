import { setWorldConstructor, World } from 'cucumber';
declare module 'cucumber' {
  interface World {
    count: number;
    timestamp: string;
  }
}
class CustomWorld implements World {
  public count: number = 0;
  public timestamp: string = '';
}
setWorldConstructor(CustomWorld);
