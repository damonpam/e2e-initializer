import * as fs from 'fs';
import { TEMPLATES_DIR } from './constants';

const CHOICES = fs.readdirSync(TEMPLATES_DIR);
export const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'What BDD template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    default: 'bdd'
  }];
