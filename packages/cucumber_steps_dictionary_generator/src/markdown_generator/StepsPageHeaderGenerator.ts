import { extname } from 'path';

export class StepsPageHeaderGenerator {
  public static createContent(uri: string): string {
    const title = uri.replace(extname(uri), '');

    return `📗 ${title}`;
  }
}
