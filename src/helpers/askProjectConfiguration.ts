import inquirer from 'inquirer';
import { QUESTIONS } from './questions';

export function askProjectConfiguration() {
  return inquirer.prompt(QUESTIONS);
}
