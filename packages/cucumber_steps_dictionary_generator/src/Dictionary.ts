import { Dirent, readdirSync, readFileSync } from 'fs';
import { isAbsolute, relative, resolve } from 'path';

import { StepDefinition } from '../types/StepDefinition';
import { StepFile } from '../types/StepFile';

export class Dictionary {
  private static readonly PARAMETERS_MATCHER = /(?<=function\s*\()(?:[\w:\s*],?)*\)?(?=\))/;
  private static readonly PATTERN_MATCHER = /(?<=\((?:\s*["']|\/\^))(?:.*)(?=(?:["']|\$\/),)/;
  private static readonly STEP_DEFINITION_MATCHER = /(?:Given|When|Then)\(\s?.*,\s*?(\{.*\},)?\s*?(?:async\s)?function\s*\((?:[\w:\s+],?)*\)?(?=\s{)/gm;
  private static readonly STEP_TYPE_MATCHER = /^(?:Given|When|Then)/;
  private readonly _directory: string;
  private readonly _stepFiles: StepFile[] = [];

  constructor(stepsDir: string) {
    this._directory = Dictionary.convertAbsolute(stepsDir);
    this.readDir(this._directory);
  }

  get directory(): string {
    return this._directory;
  }

  get stepFiles(): StepFile[] {
    return this._stepFiles;
  }

  private static convertAbsolute(path: string): string {
    return isAbsolute(path) ? path : resolve(process.cwd(), path);
  }

  private static filterFolders(entries: Dirent[]) {
    return entries.filter((folder) => folder.isDirectory());
  }

  private static getParameters(step: string): string[][] | undefined {
    const parameters = Dictionary.PARAMETERS_MATCHER.exec(step)?.toString();

    if (!parameters) {
      return;
    }

    return parameters.split(',').map((parameter) => parameter.replace(/\s+/g, '').split(':'));
  }

  private static getPattern(step: string): string {
    const pattern = Dictionary.PATTERN_MATCHER.exec(step)?.toString();

    if (!pattern) {
      throw new Error(`The step "${step}" does not contain any pattern`);
    }

    return pattern;
  }

  private static getStepDefinitions(file: string): StepDefinition[] {
    return (
      readFileSync(file, { encoding: 'utf8' })
        .match(Dictionary.STEP_DEFINITION_MATCHER)
        ?.sort()
        .map((step) => {
          step = step.replace(/\s\s+/g, '').replace(/\n/g, '');
          return {
            parameters: Dictionary.getParameters(step) || undefined,
            pattern: Dictionary.getPattern(step),
            type: Dictionary.getType(step)
          };
        }) || []
    );
  }

  private static getType(step: string): string {
    const type = Dictionary.STEP_TYPE_MATCHER.exec(step)?.toString();

    if (!type) {
      throw new Error(`The step "${step}" does not contain any type "Given, When or Then"`);
    }

    return type;
  }

  private filterFiles(path: string, entries: Dirent[]) {
    return entries
      .filter((entry) => !entry.isDirectory())
      .map((file) => `${path}/${file.name}`)
      .filter((filepath) => filepath.endsWith('_steps.ts'));
  }

  private readDir(path: string): string[] {
    const entries = readdirSync(path, { withFileTypes: true });

    const files = this.filterFiles(path, entries);
    const folders = Dictionary.filterFolders(entries);

    this.stepFiles.push(...files.map((file) => this.readFile(file)));

    const pushSubFolderFiles = (folder: Dirent) => {
      const subDir = `${path}/${folder.name}`;
      files.push(...this.readDir(subDir));
    };
    folders.forEach(pushSubFolderFiles);

    return files;
  }

  private readFile(file: string) {
    return { steps: Dictionary.getStepDefinitions(file), uri: relative(this._directory, file) };
  }
}
