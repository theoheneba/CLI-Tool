import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);

export async function setupGit({ name }) {
  const projectPath = process.cwd() + '/' + name;
  
  try {
    console.log(chalk.blue('\nInitializing git repository...'));
    await execAsync('git init', { cwd: projectPath });
    await execAsync('git add .', { cwd: projectPath });
    await execAsync('git commit -m "Initial commit"', { cwd: projectPath });
    console.log(chalk.green('✓ Git repository initialized'));
    return true;
  } catch (error) {
    console.warn(chalk.yellow('Failed to initialize git repository'));
    return false;
  }
}