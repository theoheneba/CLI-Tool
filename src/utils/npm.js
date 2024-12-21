import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function installDependencies(projectPath) {
  try {
    await execAsync('npm install', { cwd: projectPath });
    return true;
  } catch (error) {
    return false;
  }
}