import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function initGit(projectPath) {
  try {
    await execAsync('git init', { cwd: projectPath });
    await execAsync('git add .', { cwd: projectPath });
    await execAsync('git commit -m "Initial commit"', { cwd: projectPath });
    return true;
  } catch (error) {
    return false;
  }
}