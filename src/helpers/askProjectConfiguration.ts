import inquirer from 'inquirer';
import { logger } from '../utils/Logger';
import { QUESTIONS } from './questions';

export function askProjectConfiguration() {
  const utilityDesc = `This utility will walk you through creating a bdd project.
It only covers the most common configuration, and tries to guess sensible defaults.

Press ^C at any time to quit.\n`;

  logger.info(utilityDesc);
  return inquirer.prompt(QUESTIONS);
}
