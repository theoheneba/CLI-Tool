import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);

export async function setupDependencies({ name }) {
  const projectPath = process.cwd() + '/' + name;
  
  try {
    console.log(chalk.blue('\nInstalling dependencies...'));
    await execAsync('npm install', { cwd: projectPath });
    console.log(chalk.green('✓ Dependencies installed'));
    return true;
  } catch (error) {
    console.warn(chalk.yellow('Failed to install dependencies'));
    return false;
  }
}