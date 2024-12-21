export default {
  name: 'express-typescript',
  description: 'Express.js application with TypeScript',
  files: {
    'package.json': {
      name: null,
      version: '1.0.0',
      scripts: {
        start: 'node dist/index.js',
        dev: 'ts-node-dev src/index.ts',
        build: 'tsc'
      },
      dependencies: {
        'express': '^4.18.2',
        'cors': '^2.8.5',
        'helmet': '^7.0.0'
      },
      devDependencies: {
        '@types/express': '^4.17.17',
        '@types/node': '^20.5.9',
        'typescript': '^5.2.2',
        'ts-node-dev': '^2.0.0'
      }
    },
    'src/index.ts': `
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`,
    'src/routes/index.ts': `
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

export default router;`,
    'tsconfig.json': {
      compilerOptions: {
        target: 'ES2020',
        module: 'CommonJS',
        outDir: './dist',
        rootDir: './src',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true
      },
      include: ['src/**/*'],
      exclude: ['node_modules']
    }
  }
};