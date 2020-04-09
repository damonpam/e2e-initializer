import * as fs from 'fs';
import { emoji } from 'node-emoji';
import path from 'path';
import { ProjectData } from '../types/ProjectData';
import { logger } from '../utils/Logger';

import { render } from './render';

// TODO pass this as arguments from CLI
const SKIP_FILES = ['node_modules', '.template.json'];

function copyFile(origFilePath: string, destFilePath: string, projectData: ProjectData) {
  const encoding = 'utf8';

  let contents = fs.readFileSync(origFilePath, { encoding });
  contents = render(contents, projectData);

  fs.writeFileSync(destFilePath, contents, { encoding });
  logger.info(`File "${destFilePath}" copied 👍`);
}

function copyDir(origFilePath: string, destFilePath: string, data: ProjectData) {
  fs.mkdirSync(destFilePath);
  logger.info(`Directory "${destFilePath}" build 👍`);

  createProjectContents(data);
}

export function createProjectContents(data: ProjectData): void {
  const filesToCreate = fs.readdirSync(data.templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(data.templatePath, file);
    const destFilePath = path.join(data.projectPath, file);

    if (SKIP_FILES.includes(file)) {
      return;
    }

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      copyFile(origFilePath, destFilePath, data);
    }

    if (stats.isDirectory()) {
      const projectPath = path.join(data.projectPath, file);
      const templatePath = path.join(data.templatePath, file);
      const dirProjectData = { ...data, projectPath, templatePath };

      copyDir(origFilePath, destFilePath, dirProjectData);
    }
  });
}
