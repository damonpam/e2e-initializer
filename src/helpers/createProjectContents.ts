import * as fs from 'fs';
import * as path from 'path';
import { ProjectData } from '../types/ProjectData';

import { render } from './render';

// TODO pass this as arguments from CLI
const SKIP_FILES = ['node_modules', '.template.json'];

function copyFile(origFilePath: string, destFilePath: string, options: ProjectData) {
  const encoding = 'utf8';

  let contents = fs.readFileSync(origFilePath, { encoding });
  contents = render(contents, options);

  fs.writeFileSync(destFilePath, contents, { encoding });
}

function copyDir(origFilePath: string, destFilePath: string, dirData: ProjectData) {
  fs.mkdirSync(destFilePath);
  createProjectContents(dirData);
}

export function createProjectContents(projectData: ProjectData): void {
  const filesToCreate = fs.readdirSync(projectData.templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(projectData.templatePath, file);
    const destFilePath = path.join(projectData.projectPath, file);

    if (SKIP_FILES.includes(file)) {
      return;
    }

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      copyFile(origFilePath, destFilePath, projectData);
    }

    if (stats.isDirectory()) {
      const projectPath = path.join(projectData.projectPath, file);
      const templatePath = path.join(projectData.templatePath, file);
      const dirData = { ...projectData, projectPath, templatePath };

      copyDir(origFilePath, destFilePath, dirData);
    }
  });
}
