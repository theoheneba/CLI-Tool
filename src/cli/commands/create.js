import inquirer from 'inquirer';
import chalk from 'chalk';
import { createProject } from '../../project/projectCreator.js';
import { templates } from '../../templates/index.js';
import { validateProjectName } from '../../utils/validation.js';

export async function handleCreate(options) {
  try {
    const answers = options.yes ? {
      name: 'my-project',
      type: 'node-api',
      git: true,
      install: true
    } : await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
        validate: validateProjectName
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of project do you want to create?',
        choices: Object.keys(templates)
      },
      {
        type: 'confirm',
        name: 'git',
        message: 'Initialize git repository?',
        default: true,
        when: !options.git
      },
      {
        type: 'confirm',
        name: 'install',
        message: 'Install dependencies?',
        default: true,
        when: !options.install
      }
    ]);

    const config = {
      ...answers,
      git: options.git || answers.git,
      install: options.install || answers.install
    };

    console.log(chalk.blue('\nCreating project...'));
    await createProject(config);
    console.log(chalk.green(`✨ Successfully created ${config.name}!`));
  } catch (error) {
    console.error(chalk.red('Error creating project:'), error.message);
    process.exit(1);
  }
}