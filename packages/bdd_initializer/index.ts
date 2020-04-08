#!/usr/bin/env node
import { COMMON_DIR } from './src/constants';
import { askProjectConfiguration } from './src/helpers/askProjectConfiguration';
import { copyContent } from './src/helpers/copyContent';
import { createDir } from './src/helpers/createDir';
import { fetchProjectData } from './src/helpers/fetchProjectData';
import { postProcess } from './src/helpers/postProcess';
import { printBanner } from './src/helpers/printBanner';
import { logger } from './src/utils/Logger';

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
}

run();
