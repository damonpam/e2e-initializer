#!/usr/bin/env node
import { Image } from 'ascii-art';
import inquirer from 'inquirer';

import { createProjectContents } from './helpers/createProjectContents';

import { createProjectDir } from './helpers/createProjectDir';
import { fetchProjectData } from './helpers/fetchProjectData';
import { postProcess } from './helpers/postProcess';
import { QUESTIONS } from './questions';

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectData = fetchProjectData(answers);

    if (!createProjectDir(projectData.projectPath)) {
      return;
    }

    createProjectContents(projectData);

    if (!postProcess(projectData)) {
      throw new Error('Ops! Something wrong happened during the post processing...');
    }
  });
