import json2md from 'json2md';

import { StepDefinition } from '../../types/StepDefinition';

export class StepTypeSectionGenerator {
  public static createContent(steps: StepDefinition[]): json2md.DataObject[] {
    return steps.map(({ pattern, parameters }) => {
      const header = `- ${pattern}`;
      const data: json2md.DataObject[] = [{ h4: header }];

      if (parameters) {
        data.push(...this.createParametersSection(parameters));
      }

      return data;
    });
  }

  private static createParametersSection(parameters: string[][]): json2md.DataObject[] {
    const header = 'Parameters:';
    const rows = parameters.map((parameter, index) => [(index + 1).toString(), ...parameter]);
    const headers = ['#', 'Name', 'Type'];

    return [{ h5: header }, { table: { headers, rows } }];
  }
}
