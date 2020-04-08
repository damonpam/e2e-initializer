import { writeFileSync } from 'fs';
import json2md from 'json2md';
import { extname, resolve } from 'path';

export class MainPageGenerator {
  private static readonly TITLE = '📚 Dictionary';
  private static readonly DICTIONARY_DESCRIPTION = `This dictionary provides the essential steps to test your application.`;
  private static readonly FILENAME = 'README.md';
  private static readonly STEP_DEFINITION_LIST_HEADER = `📖  Step definitions:`;

  public static write(filenames: string[], path: string): void {
    const content = this.createContent(filenames);
    path = resolve(path, this.FILENAME);

    writeFileSync(path, content);
  }

  private static createContent(filenames: string[]): string {
    const orderStepFilesListAlphabeticallyAsc = (string1: string, string2: string) => string1.localeCompare(string2);
    const addLinkToStepFile = (file: string) =>
      `[${file.replace(extname(file), '')}](${file.replace(extname(file), '.md')})`;

    return json2md([
      { h1: this.TITLE },
      {
        p: this.DICTIONARY_DESCRIPTION
      },
      { p: this.STEP_DEFINITION_LIST_HEADER },
      {
        ul: [...filenames.sort(orderStepFilesListAlphabeticallyAsc).map(addLinkToStepFile)]
      }
    ]);
  }
}
