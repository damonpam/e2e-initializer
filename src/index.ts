#!/usr/bin/env node
import inquirer from 'inquirer';

import { createProject } from './helpers/createProject';
import { prepareProject } from './helpers/prepareProject';
import { QUESTIONS } from './questions';

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const { projectPath } = prepareProject(answers);

    if (!createProject(projectPath)) {
      return;
    }
  });
