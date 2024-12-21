export default {
  typescript: true,
  testing: {
    framework: 'vitest',
    coverage: true
  },
  linting: {
    eslint: true,
    prettier: true
  },
  dependencies: {
    add: ['@tanstack/react-query', '@chakra-ui/react'],
    remove: []
  }
}