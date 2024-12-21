#!/usr/bin/env node
import { program } from 'commander';
import { handleCreate } from './cli/commands/create.js';

program
  .version('1.0.0')
  .description('A CLI tool for scaffolding different types of projects');

// Make create the default command
if (process.argv.length === 2) {
  process.argv.push('create');
}

program
  .command('create')
  .description('Create a new project')
  .option('-g, --git', 'Initialize git repository', false)
  .option('-i, --install', 'Install dependencies after creation', false)
  .option('-y, --yes', 'Skip prompts and use defaults', false)
  .action(handleCreate);

program.parse(process.argv);