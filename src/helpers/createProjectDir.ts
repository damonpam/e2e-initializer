import chalk from 'chalk';
import fs from 'fs';

export function createProjectDir(path: string) {
  const recursive = true;

  if (fs.existsSync(path)) {
    console.log(chalk.red(`Project directory "${path}" exists. Delete or use another name.`));
    return false;
  }

  fs.mkdirSync(path, { recursive });

  return true;
}
