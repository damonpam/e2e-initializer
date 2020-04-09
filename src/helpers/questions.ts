import * as fs from 'fs';
import { emoji } from 'node-emoji';
import { TEMPLATES_DIR } from '../constants';

const CHOICES = fs.readdirSync(TEMPLATES_DIR);

// TODO remove coding-style

export const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: `${emoji.robot_face} What BDD template would you like to generate?`,
    choices: CHOICES,
    default: 'cucumber'
  },
  {
    name: 'name',
    type: 'input',
    message: `${emoji.memo} Project name:`,
    default: 'bdd'
  },
  {
    name: 'confirmed',
    type: 'confirm',
    message: `${emoji.nerd_face} Is the configuration correct?`,
    default: 'yes'
  }];
