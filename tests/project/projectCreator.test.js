import { test } from 'node:test';
import assert from 'node:assert';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs-extra';
import { createProject } from '../../src/project/projectCreator.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('createProject', async (t) => {
  const testDir = path.join(__dirname, '../temp-test-project');

  t.beforeEach(async () => {
    await fs.remove(testDir);
  });

  t.afterEach(async () => {
    await fs.remove(testDir);
  });

  await t.test('should create project with correct structure', async () => {
    const config = {
      name: 'temp-test-project',
      type: 'node-api',
      git: false,
      install: false
    };

    await createProject(config);
    
    assert.ok(await fs.pathExists(path.join(testDir, 'package.json')));
    assert.ok(await fs.pathExists(path.join(testDir, 'src')));
    assert.ok(await fs.pathExists(path.join(testDir, 'README.md')));
    assert.ok(await fs.pathExists(path.join(testDir, '.gitignore')));
  });
});