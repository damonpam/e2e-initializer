import { StepDefinition } from './StepDefinition';

export interface StepFile {
  uri: string;
  steps: StepDefinition[];
}
