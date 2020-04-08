import clear from 'clear';
import { Options, textSync } from 'figlet';
import { fruit } from 'gradient-string';

export function printBanner(text: string) {
  clear();

  const options: Options = { font: 'DOS Rebel', horizontalLayout: 'full', verticalLayout: 'fitted' };
  console.log(fruit(textSync(text, options)));
}
