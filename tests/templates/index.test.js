import { test } from 'node:test';
import assert from 'node:assert';
import { templates } from '../../src/templates/index.js';

test('templates', async (t) => {
  await t.test('should export all templates', () => {
    assert.ok(templates['node-api']);
    assert.ok(templates['react-app']);
    assert.ok(templates['vue-app']);
    assert.ok(templates['cli-tool']);
    assert.ok(templates['express-typescript']);
  });

  await t.test('each template should have required properties', () => {
    Object.values(templates).forEach(template => {
      assert.ok(template.name);
      assert.ok(template.description);
      assert.ok(template.files);
    });
  });
});