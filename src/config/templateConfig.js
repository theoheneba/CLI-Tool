/**
 * Default configuration options for templates
 */
export const defaultConfig = {
  typescript: false,
  testing: true,
  linting: true,
  prettier: true
};

/**
 * Validates and merges user config with defaults
 */
export function mergeConfig(userConfig = {}) {
  return {
    ...defaultConfig,
    ...userConfig
  };
}