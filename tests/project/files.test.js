import { test } from 'node:test';
import assert from 'node:assert';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs-extra';
import { createProjectFiles } from '../../src/project/files.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('createProjectFiles', async (t) => {
  const testDir = path.join(__dirname, '../temp-test-files');

  t.beforeEach(async () => {
    await fs.remove(testDir);
  });

  t.afterEach(async () => {
    await fs.remove(testDir);
  });

  await t.test('should create all required files', async () => {
    const config = {
      name: 'temp-test-files',
      type: 'node-api'
    };

    await createProjectFiles(config);
    
    // Check core files
    assert.ok(await fs.pathExists(path.join(testDir, 'package.json')));
    assert.ok(await fs.pathExists(path.join(testDir, 'README.md')));
    assert.ok(await fs.pathExists(path.join(testDir, '.gitignore')));
    
    // Check template-specific files
    assert.ok(await fs.pathExists(path.join(testDir, 'src/index.js')));
    assert.ok(await fs.pathExists(path.join(testDir, 'src/routes/index.js')));
  });
});