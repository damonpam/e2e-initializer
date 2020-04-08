import { render } from 'ejs';
import * as fs from 'fs';
import path from 'path';

import { ENCODING_UTF8 } from '../constants';
import { logger } from '../utils/Logger';

// TODO pass this as arguments from CLI
const SKIP_FILES = ['node_modules', '.template.json'];

function copyFile(origFilePath: string, destFilePath: string, data?: { [k: string]: string }): void {
  let content = fs.readFileSync(origFilePath, ENCODING_UTF8);
  content = render(content, data);

  fs.writeFileSync(destFilePath, content, ENCODING_UTF8);
  logger.info(`File "${destFilePath}" copied 👍`);
}

function copyDir(origFilePath: string, destFilePath: string, data?: { [k: string]: string }) {
  fs.mkdirSync(destFilePath);
  logger.info(`Directory "${destFilePath}" created 👍`);

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  copyContent(origFilePath, destFilePath, data);
}

export function copyContent(originPath: string, destinationPath: string, data?: { [k: string]: string }): void {
  const filesToCreate = fs.readdirSync(originPath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(originPath, file);
    const destFilePath = path.join(destinationPath, file);

    if (SKIP_FILES.includes(file)) {
      return;
    }

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      copyFile(origFilePath, destFilePath, data);
    }

    if (stats.isDirectory()) {
      const projectPath = path.join(destinationPath, file);
      const templatePath = path.join(originPath, file);
      const dirData = { ...data, projectPath, templatePath };

      copyDir(origFilePath, destFilePath, dirData);
    }
  });
}
