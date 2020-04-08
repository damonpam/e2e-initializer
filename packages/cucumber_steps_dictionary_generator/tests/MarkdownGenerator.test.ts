import { readdirSync, readFileSync } from 'fs';
import mock from 'mock-fs';
import { resolve } from 'path';

import { Dictionary } from '../src/Dictionary';
import { MarkdownGenerator } from '../src/markdown_generator/MarkdownGenerator';
import { readFileFromMarkdownDictionary } from './helpers/readFileFromMarkdownDictionary';

describe('MarkdownGenerator works', (): void => {
  const path = 'tmp';
  const stepsDir = resolve(__dirname, './resources/step_definitions');
  const dictionary = new Dictionary(stepsDir);

  afterEach(() => {
    mock.restore();
  });

  it('should create the main page', (): void => {
    const filename = 'README.md';
    const mainPage = readFileFromMarkdownDictionary(filename);

    mock();
    MarkdownGenerator.write(dictionary, path);
    const generatedMainPage = readFileSync(resolve(path, filename), { encoding: 'utf8' });

    expect(generatedMainPage).toEqual(mainPage);
  });

  it('should create the step pages', (): void => {
    const navigationStepsPageFilename = 'navigation_steps.md';
    const cartStepsPageFilename = 'checkout/cart_steps.md';
    const navigationStepsPage = readFileFromMarkdownDictionary(navigationStepsPageFilename);
    const cartStepsPage = readFileFromMarkdownDictionary(cartStepsPageFilename);

    mock();
    MarkdownGenerator.write(dictionary, path);

    const generatedNavigationPage = readFileSync(resolve(path, navigationStepsPageFilename), { encoding: 'utf8' });
    const generatedCartPage = readFileSync(resolve(path, cartStepsPageFilename), { encoding: 'utf8' });

    expect(generatedNavigationPage).toEqual(navigationStepsPage);
    expect(generatedCartPage).toEqual(cartStepsPage);
  });

  it('should write files', (): void => {
    const checkoutPath = `${path}/checkout`;
    const rootFiles = ['README.md', 'navigation_steps.md', 'checkout'];
    const checkoutFiles = ['cart_steps.md'];

    mock();
    MarkdownGenerator.write(dictionary, path);
    const rootFilesFound = readdirSync(path);
    const checkoutFilesFound = readdirSync(checkoutPath);

    expect(rootFilesFound.sort()).toEqual(rootFiles.sort());
    expect(checkoutFilesFound.sort()).toEqual(checkoutFiles.sort());
  });
});
