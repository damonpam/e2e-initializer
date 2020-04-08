import { resolve } from 'path';

import { Dictionary } from '../src/Dictionary';
import { StepDefinition } from '../types/StepDefinition';
import { stepFiles } from './resources/stepFiles';

describe('Dictionary works', (): void => {
  const stepsDir = resolve(__dirname, './resources/step_definitions');
  const dictionary = new Dictionary(stepsDir);

  it('should fetch the step files defined in the dictionary', (): void => {
    const expectedUris = [`navigation_steps.ts`, `checkout/cart_steps.ts`];
    const uris = dictionary.stepFiles.map(({ uri }) => uri);

    expect(uris).toEqual(expectedUris);
  });

  it.each([
    ['navigation_steps', stepFiles.find(({ uri }) => uri.includes('navigation_steps'))?.steps],
    ['cart_steps', stepFiles.find(({ uri }) => uri.includes('cart_steps'))?.steps]
  ])('should include the steps in %s', (file: string, steps: StepDefinition[] | undefined): void => {
    const stepFile = dictionary.stepFiles.find(({ uri }) => uri.includes(file));

    expect(stepFile).not.toBeUndefined();
    expect(stepFile?.steps).toEqual(steps);
  });
});
