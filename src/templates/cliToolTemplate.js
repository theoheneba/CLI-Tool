export default {
  name: 'cli-tool',
  description: 'Command-line interface tool',
  files: {
    'package.json': {
      name: null,
      version: '1.0.0',
      type: 'module',
      bin: {
        'cli-tool': './src/cli.js'
      },
      scripts: {
        start: 'node src/cli.js'
      },
      dependencies: {
        'commander': '^11.0.0',
        'inquirer': '^9.2.7',
        'chalk': '^5.3.0'
      }
    },
    'src/cli.js': `
#!/usr/bin/env node
import { program } from 'commander';

program
  .version('1.0.0')
  .description('CLI Tool')
  .parse(process.argv);`
  }
};