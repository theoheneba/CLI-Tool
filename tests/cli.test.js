import { test } from 'node:test';
import assert from 'node:assert';
import { validateProjectName } from '../src/utils/validation.js';

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