#!/usr/bin/env node
import inquirer from 'inquirer';
import { createProjectContents } from './helpers/createProjectContents';

import { createProjectDir } from './helpers/createProjectDir';
import { prepareProject } from './helpers/prepareProject';
import { QUESTIONS } from './questions';

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const { templatePath, projectName, projectPath } = prepareProject(answers);

    if (!createProjectDir(projectPath)) {
      return;
    }

    createProjectContents(templatePath, projectName)
  });
