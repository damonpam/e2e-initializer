import clear from 'clear';
import { Options, textSync } from 'figlet';
import { summer } from 'gradient-string';

export function printBanner(text: string) {
  clear();

  const options: Options = { font: 'DOS Rebel', horizontalLayout: 'full', verticalLayout: 'fitted' };
  console.log(summer(textSync(text, options)));
}
