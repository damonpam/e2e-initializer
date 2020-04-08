#!/usr/bin/env node

import yargs from 'yargs';

import { Dictionary } from './src/Dictionary';
import { MarkdownGenerator } from './src/markdown_generator/MarkdownGenerator';

const options = yargs
  .scriptName('bdd-dictionary-generator')
  .usage('Usage: $0 [options]')
  .example(
    '$0 -p ./step-definitions',
    'Creates a Markdown dictionary in the current directory containing the definitions defined in the given path'
  )
  .options({
    f: {
      alias: 'format',
      default: 'markdown',
      defaultDescription: 'Markdown',
      demandOption: false,
      describe: 'Output format: [Markdown, JSON]',
      type: 'string'
    },
    o: {
      alias: 'output',
      default: './dictionary',
      defaultDescription: 'Current directory',
      demandOption: false,
      describe: 'Path where the dictionary will be created',
      type: 'string'
    },
    p: {
      alias: 'path',
      default: '.',
      defaultDescription: 'Current directory',
      demandOption: false,
      describe: 'Directory path containing the step definition files',
      type: 'string'
    }
  }).argv;

const dictionary = new Dictionary(options.p);

switch (options.f.toLowerCase()) {
  case 'markdown':
    MarkdownGenerator.write(dictionary, options.o);
    break;
  case 'json':
    console.info(JSON.stringify(dictionary.stepFiles, null, 2));
    break;
  default:
    throw new Error('No valid format. Run "bdd-dictionary-generator --help"');
}

console.info('✅  The dictionary was generated successfully!');
