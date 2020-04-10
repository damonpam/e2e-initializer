import { mkdirSync } from 'fs';

import { TMP_DIR } from '../constants';

export const ensureTmpDirExists = (): void => {
  mkdirSync(TMP_DIR, { recursive: true });
};
