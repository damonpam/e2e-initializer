import clear from 'clear';
import { Options, textSync } from 'figlet';

const lolcatjs = require('lolcatjs');

export function printBanner(text: string) {
  clear();

  const options: Options = { font: 'DOS Rebel', horizontalLayout: 'full', verticalLayout: 'fitted' };

  lolcatjs.fromString(textSync(text, options));
}
