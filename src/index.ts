#!/usr/bin/env node
import { askProjectConfiguration } from './helpers/askProjectConfiguration';
import { copyContent } from './helpers/copyContent';
import { createDir } from './helpers/createDir';
import { fetchProjectData } from './helpers/fetchProjectData';
import { postProcess } from './helpers/postProcess';
import { printBanner } from './helpers/printBanner';
import { logger } from './utils/Logger';

async function run(): Promise<void> {
  printBanner('BDD initializer');

  const {confirmed, ...answers} = await askProjectConfiguration();

  if(!confirmed){
    logger.error('Configuration aborted...')
  }

  const { templatePath, projectPath, ...data } = fetchProjectData(answers);

  logger.info('Creating project...', 'construction');

  createDir(projectPath);
  copyContent(templatePath, projectPath, data);

  postProcess(templatePath, projectPath);

  logger.success('Project created successfully!');
}

run();
