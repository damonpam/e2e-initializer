#!/usr/bin/env node
import { COMMON_DIR } from './constants';
import { askProjectConfiguration } from './helpers/askProjectConfiguration';
import { copyContent } from './helpers/copyContent';
import { createDir } from './helpers/createDir';
import { fetchProjectData } from './helpers/fetchProjectData';
import { postProcess } from './helpers/postProcess';
import { printBanner } from './helpers/printBanner';
import { printFooter } from './helpers/printFooter';
import { logger } from './utils/Logger';

async function run(): Promise<void> {
  printBanner('BDD initializer');

  const { confirmation, ...answers } = await askProjectConfiguration();

  if (!confirmation) {
    logger.exit('Ops! Configuration aborted...', 1);
  }

  const { templatePath, projectPath, ...data } = fetchProjectData(answers);

  logger.info('Creating project...', 'construction');

  createDir(projectPath);
  copyContent(templatePath, projectPath, data);

  copyContent(COMMON_DIR, projectPath);

  postProcess(templatePath, projectPath);

  logger.success('Project created successfully!');

  printFooter('Happy testing dude!')
}

run();
