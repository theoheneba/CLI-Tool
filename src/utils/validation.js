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

export function validateProjectPath(path) {
  // Add path validation logic here
  return true;
}