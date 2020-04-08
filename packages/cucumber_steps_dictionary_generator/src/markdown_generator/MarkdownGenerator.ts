import { mkdirSync } from 'fs';
import { resolve } from 'path';

import { Dictionary } from '../Dictionary';
import { MainPageGenerator } from './MainPageGenerator';
import { StepsPageGenerator } from './StepsPageGenerator';

export class MarkdownGenerator {
  public static write({ stepFiles }: Dictionary, path: string): void {
    const stepFilesUris = stepFiles.map(({ uri }) => uri);

    mkdirSync(resolve(path), { recursive: true });

    MainPageGenerator.write(stepFilesUris, path);
    StepsPageGenerator.write(stepFiles, path);
  }
}
