import { createProjectFiles } from './files.js';
import { setupGit } from './git.js';
import { setupDependencies } from './dependencies.js';
import { validateProjectConfig } from '../utils/validation.js';

export async function createProject(config) {
  validateProjectConfig(config);
  
  await createProjectFiles(config);
  
  if (config.git) {
    await setupGit(config);
  }
  
  if (config.install) {
    await setupDependencies(config);
  }
}