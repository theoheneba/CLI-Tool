import { test } from 'node:test';
import assert from 'node:assert';
import { validateProjectName, validateProjectConfig } from '../src/utils/validation.js';

test('validateProjectName', async (t) => {
  await t.test('should accept valid project names', () => {
    assert.strictEqual(validateProjectName('my-project'), true);
    assert.strictEqual(validateProjectName('project123'), true);
  });

  await t.test('should reject invalid project names', () => {
    assert.throws(() => validateProjectName(''));
    assert.throws(() => validateProjectName('Project'));
    assert.throws(() => validateProjectName('my_project'));
  });
});

test('validateProjectConfig', async (t) => {
  await t.test('should accept valid config', () => {
    const config = {
      name: 'my-project',
      type: 'node-api'
    };
    assert.strictEqual(validateProjectConfig(config), true);
  });

  await t.test('should reject invalid config', () => {
    assert.throws(() => validateProjectConfig({ name: 'my-project' }));
    assert.throws(() => validateProjectConfig({ type: 'node-api' }));
    assert.throws(() => validateProjectConfig({}));
  });
});