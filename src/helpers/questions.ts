import * as fs from 'fs';
import { emoji } from 'node-emoji';
import { TEMPLATES_DIR } from './constants';

const CHOICES = fs.readdirSync(TEMPLATES_DIR);
export const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: `${emoji.robot_face} What BDD template would you like to generate?`,
    choices: CHOICES
  },
  {
    name: 'name',
    type: 'input',
    message: `${emoji.memo} Project name:`,
    default: 'bdd'
  }];
