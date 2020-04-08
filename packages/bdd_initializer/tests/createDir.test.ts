import * as fs from 'fs';
import mock from 'mock-fs';

import { createDir } from '../src/helpers/createDir';

describe('Create project directory', (): void => {
  beforeEach(() => {
    const dirStructure = { bdd: {} };
    mock(dirStructure);
  });

  afterEach(() => mock.restore());

  it('should create a new directory', (): void => {
    const path = 'cucumber';

    createDir(path);

    const pathExists = fs.existsSync(path);
    expect(pathExists).toBeTruthy();
  });

  it('should not create an existing project directory', (): void => {
    const path = 'bdd';

    const createBddDir = (): void => createDir(path);

    expect(createBddDir).toThrowError(`Project directory "${path}" already exists.`);
  });
});
