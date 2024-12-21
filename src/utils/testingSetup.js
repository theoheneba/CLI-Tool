import fs from 'fs-extra';
import path from 'path';

/**
 * Configures testing based on user preferences
 */
export async function setupTesting(projectPath, config) {
  if (!config.testing) return;

  const { framework = 'vitest', coverage = true } = config.testing;
  
  const testConfig = {
    vitest: {
      dependencies: {
        vitest: '^0.34.3',
        '@vitest/coverage-v8': coverage ? '^0.34.3' : undefined
      },
      scripts: {
        test: 'vitest',
        'test:coverage': coverage ? 'vitest run --coverage' : undefined
      }
    }
  };

  const selectedConfig = testConfig[framework];
  if (!selectedConfig) return;

  // Update package.json
  const pkgPath = path.join(projectPath, 'package.json');
  const pkg = await fs.readJson(pkgPath);

  pkg.devDependencies = {
    ...pkg.devDependencies,
    ...selectedConfig.dependencies
  };

  pkg.scripts = {
    ...pkg.scripts,
    ...selectedConfig.scripts
  };

  await fs.writeJson(pkgPath, pkg, { spaces: 2 });
}