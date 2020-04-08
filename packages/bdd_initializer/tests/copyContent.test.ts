import fs from 'fs';
import mock from 'mock-fs';

import { ENCODING_UTF8 } from '../src/constants';
import { copyContent } from '../src/helpers/copyContent';

describe('Create project content', (): void => {
  beforeEach(() => {
    const dirStructure = {
      template: {
        to: { dir: { 'note.md': 'hello bdd!' } },
        'package.json': '"name": "<%= name %>"'
      },
      project: {}
    };
    mock(dirStructure);
  });

  afterEach(() => mock.restore());

  it('should copy all files', (): void => {
    const templatePath = 'template';
    const projectPath = 'project';
    const name = 'bdd-initializer';
    const notePath = 'project/to/dir/note.md';
    const packagePath = 'project/package.json';
    const noteContent = 'hello bdd!';
    const packageContent = '"name": "bdd-initializer"';

    copyContent(templatePath, projectPath, { name });

    let fileExists = fs.existsSync(notePath);
    let content = fs.readFileSync(notePath, ENCODING_UTF8);
    expect(fileExists).toBeTruthy();
    expect(content).toBe(noteContent);

    fileExists = fs.existsSync(packagePath);
    content = fs.readFileSync(packagePath, ENCODING_UTF8);
    expect(fileExists).toBeTruthy();
    expect(content).toBe(packageContent);
  });
});
