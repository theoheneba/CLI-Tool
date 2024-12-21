export default {
  name: 'node-api',
  description: 'Node.js API with Express',
  files: {
    'package.json': {
      name: null, // Will be replaced with project name
      version: '1.0.0',
      type: 'module',
      scripts: {
        start: 'node src/index.js',
        dev: 'node --watch src/index.js',
        test: 'node --test'
      },
      dependencies: {
        express: '^4.18.2',
        'cors': '^2.8.5',
        'helmet': '^7.0.0'
      },
      devDependencies: {
        'nodemon': '^3.0.1'
      }
    },
    'src/index.js': `
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`,
    'src/routes/index.js': `
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

export default router;`
  }
};