export function validateProjectName(name) {
  if (!name || name.trim().length === 0) {
    throw new Error('Project name cannot be empty');
  }

  if (!/^[a-z0-9-]+$/.test(name)) {
    throw new Error('Project name can only contain lowercase letters, numbers, and hyphens');
  }

  if (name.length > 214) {
    throw new Error('Project name must be less than 214 characters');
  }

  return true;
}

export function validateProjectConfig(config) {
  const { name, type } = config;
  
  validateProjectName(name);
  
  if (!type) {
    throw new Error('Project type is required');
  }
  
  return true;
}