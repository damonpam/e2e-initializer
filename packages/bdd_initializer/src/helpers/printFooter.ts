import { fruit } from 'gradient-string';

const cowsay = require('cowsay2');
const cows = require('cowsay2/cows');

export function printFooter(text: string) {
  const cowsays = cowsay.say(text, { cow: cows['charizardvice'] });
  console.log(fruit(cowsays));
}
