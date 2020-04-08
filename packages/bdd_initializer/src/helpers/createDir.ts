import fs from 'fs';

import { logger } from '../utils/Logger';

export function createDir(path: string): void {
  if (fs.existsSync(path)) {
    logger.error(`Project directory "${path}" already exists. Delete or use another name.`);
  }

  fs.mkdirSync(path);
}
