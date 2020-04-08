import { mkdirSync, writeFileSync } from 'fs';
import json2md from 'json2md';
import { dirname, extname, resolve } from 'path';

import { StepDefinition } from '../../types/StepDefinition';
import { StepFile } from '../../types/StepFile';
import { StepsPage } from '../../types/StepsPage';
import { StepsPageHeaderGenerator } from './StepsPageHeaderGenerator';
import { StepTypeSectionGenerator } from './StepTypeSectionGenerator';

type StepType = 'Given' | 'When' | 'Then';

export class StepsPageGenerator {
  public static write(stepFiles: StepFile[], path: string): void {
    const writeStepsPage = ({ page, content }: StepsPage) => {
      const filepath = resolve(path, page);

      mkdirSync(dirname(filepath), { recursive: true });
      writeFileSync(filepath, content);
    };

    this.createStepsPages(stepFiles).forEach(writeStepsPage);
  }

  private static createContent({ steps, uri }: StepFile): string {
    const header = StepsPageHeaderGenerator.createContent(uri);
    const description = `${steps.length} steps defined.`;
    const data: json2md.DataObject[] = [{ h1: header }, { p: description }];

    this.pushStepTypeSectionContent('Given', steps, data);
    this.pushStepTypeSectionContent('When', steps, data);
    this.pushStepTypeSectionContent('Then', steps, data);

    return json2md(data);
  }

  private static createStepsPage(stepFile: StepFile): StepsPage {
    const { uri } = stepFile;
    const markdownExt = '.md';

    return {
      content: this.createContent(stepFile),
      page: uri.replace(extname(uri), markdownExt)
    };
  }

  private static createStepsPages(stepFiles: StepFile[]): StepsPage[] {
    return stepFiles.map((stepFile: StepFile) => this.createStepsPage(stepFile));
  }

  private static filterStepsByType(type: StepType, steps: StepDefinition[]): StepDefinition[] {
    return steps.filter((step) => step.type === type);
  }

  private static pushStepTypeSectionContent(
    stepType: StepType,
    steps: StepDefinition[],
    content: json2md.DataObject[]
  ): void {
    const filteredSteps = this.filterStepsByType(stepType, steps);

    if (filteredSteps.length) {
      const emoji = stepType === 'Given' ? '📍' : stepType === 'When' ? '🎬' : '✅';
      const h2 = `${emoji} ${stepType}`;
      content.push({ h2 }, ...StepTypeSectionGenerator.createContent(filteredSteps));
    }
  }
}
