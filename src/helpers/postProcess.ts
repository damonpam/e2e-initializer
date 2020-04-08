import path from 'path';
import fs from 'fs'
import shell from 'shelljs'
import { ProjectData } from '../types/ProjectData';

export function postProcess({projectPath, templatePath}: ProjectData): boolean {
  const isNode = fs.existsSync(path.join(templatePath, 'package.json'));

  if (isNode) {
    shell.cd(projectPath);
    const command = 'yarn install';
    const result = shell.exec(command);

    if (result.code !== 0) {
      return false;
    }
  }

  // TODO commit all the framework setup to the project

  return true;
}
