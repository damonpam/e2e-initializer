import * as fs from 'fs';
import * as path from 'path';

import { PROJECTS_DIR } from '../constants';

const SKIP_FILES = ['node_modules', '.template.json'];

export function createProjectContents(templatePath: string, projectName: string): void {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file);
    const destFilePath = path.join(PROJECTS_DIR, projectName, file);

    if (SKIP_FILES.includes(file)) {
      return;
    }

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      fs.copyFileSync(origFilePath, destFilePath);
    }

    if (stats.isDirectory()) {
      fs.mkdirSync(destFilePath);
      createProjectContents(path.join(templatePath, file), path.join(projectName, file));
    }
  });
}
