import fs from 'fs-extra';
import path from 'path';

/**
 * Loads configuration from create-project.config.js if it exists
 */
export async function loadConfig(projectPath) {
  const configPath = path.join(projectPath, 'create-project.config.js');
  
  try {
    if (await fs.pathExists(configPath)) {
      const config = await import(configPath);
      return config.default || {};
    }
  } catch (error) {
    console.warn('Error loading config:', error.message);
  }
  
  return {};
}