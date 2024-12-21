/**
 * Manages project dependencies
 */
export function processDependencies(packageJson, config) {
  if (!config.dependencies) return packageJson;

  const { add = [], remove = [] } = config.dependencies;
  const dependencies = { ...packageJson.dependencies };

  // Remove specified dependencies
  remove.forEach(dep => {
    delete dependencies[dep];
  });

  // Add new dependencies
  add.forEach(dep => {
    if (!dependencies[dep]) {
      dependencies[dep] = 'latest';
    }
  });

  return {
    ...packageJson,
    dependencies
  };
}