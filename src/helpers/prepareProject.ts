import * as path from 'path';
import { PROJECTS_DIR, TEMPLATES_DIR } from '../constants';
import { ProjectOptions } from '../types/ProjectOptions';

export function prepareProject(answers: { [p: string]: {}; }): ProjectOptions {
  const projectTemplate = answers['template'] as string;
  const projectName = answers['name'] as string;

  const templatePath = path.join(TEMPLATES_DIR, projectTemplate);
  const projectPath = path.join(PROJECTS_DIR, projectName);

  return {
    projectName,
    projectTemplate,
    projectPath,
    templatePath
  };
}
