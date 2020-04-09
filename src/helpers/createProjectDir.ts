import fs from 'fs';
import { logger } from '../utils/Logger';

export function createProjectDir(path: string): void {
  if (fs.existsSync(path)) {
    logger.error(`Project directory "${path}" exists. Delete or use another name.`);
  }

  fs.mkdirSync(path);
}
