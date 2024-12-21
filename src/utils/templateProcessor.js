import { mergeConfig } from '../config/templateConfig.js';

/**
 * Processes template files based on configuration
 */
export function processTemplate(template, config) {
  const mergedConfig = mergeConfig(config);
  const files = { ...template.files };

  if (mergedConfig.typescript) {
    // Add TypeScript configuration
    files['tsconfig.json'] = {
      compilerOptions: {
        target: 'ES2020',
        module: 'ESNext',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true
      }
    };
  }

  if (mergedConfig.prettier) {
    // Add Prettier configuration
    files['.prettierrc'] = {
      semi: true,
      singleQuote: true,
      trailingComma: 'es5'
    };
  }

  return files;
}