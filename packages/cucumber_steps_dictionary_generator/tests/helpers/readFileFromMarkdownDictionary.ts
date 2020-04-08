import { readFileSync } from 'fs';
import { resolve } from 'path';

export function readFileFromMarkdownDictionary(filename: string): string {
  return readFileSync(resolve(__dirname, '../resources/markdown_dictionary', filename), { encoding: 'utf8' });
}
