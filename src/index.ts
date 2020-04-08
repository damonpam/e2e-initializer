#!/usr/bin/env node
import inquirer from 'inquirer';
import * as path from 'path';
import { TEMPLATES_DIR } from './constants';

import { createProjectContents } from './helpers/createProjectContents';

import { createProjectDir } from './helpers/createProjectDir';
import { fetchProjectData } from './helpers/fetchProjectData';
import { QUESTIONS } from './questions';

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectData = fetchProjectData(answers);

    if (!createProjectDir(projectData.projectPath)) {
      return;
    }

    createProjectContents(projectData);
  });
