import path from 'path';
import { CURRENT_DIR, TEMPLATES_DIR } from '../constants';
import { ProjectData } from '../types/ProjectData';

export function fetchProjectData(answers: { [p: string]: {}; }): ProjectData {
  const template = answers['template'] as string;
  const name = answers['name'] as string;
  const projectPath = path.join(CURRENT_DIR, name);
  const templatePath = path.join(TEMPLATES_DIR, template);

  return {
    name,
    projectPath,
    template,
    templatePath
  };
}
