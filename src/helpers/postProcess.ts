import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import { ProjectData } from '../types/ProjectData';
import {logger} from '../utils/Logger';

export function postProcess({ projectPath, templatePath }: ProjectData): void {
  const isNode = fs.existsSync(path.join(templatePath, 'package.json'));

  if (isNode) {
    logger.info('Installing project dependencies...', 'hammer_and_wrench');

    shell.cd(projectPath);
    const command = 'yarn install';
    const result = shell.exec(command);

    if (result.code !== 0) {
      logger.error('Something wrong happened during the dependencies installation...');
    }
  }

  /* TODO add more post process tasks, like:
  / commit all the framework setup to the project
  /... */
}
