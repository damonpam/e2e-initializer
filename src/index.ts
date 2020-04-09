#!/usr/bin/env node
import { askProjectConfiguration } from './helpers/askProjectConfiguration';
import { createProjectContents } from './helpers/createProjectContents';
import { createProjectDir } from './helpers/createProjectDir';
import { fetchProjectData } from './helpers/fetchProjectData';
import { postProcess } from './helpers/postProcess';
import { printBanner } from './helpers/printBanner';
import { logger } from './utils/Logger';

async function run(): Promise<void> {
  printBanner('BDD initializer');

  const answers = await askProjectConfiguration();
  const data = fetchProjectData(answers);

  logger.info('Creating project...', 'construction');

  createProjectDir(data.projectPath);
  createProjectContents(data);

  postProcess(data);

  logger.success('Project created successfully!');
}

run();
