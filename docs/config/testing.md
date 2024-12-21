# Testing Configuration

Configure testing in your project:

```js
// create-project.config.js
export default {
  testing: {
    framework: 'vitest',
    coverage: true,
    config: {
      // Framework-specific options
    }
  }
}
```

## Supported Frameworks

- Vitest (default)
- Jest

## Coverage Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `coverage` | boolean | `true` | Enable coverage reporting |
| `threshold` | number | `80` | Coverage threshold |
| `reporter` | string[] | `['text', 'html']` | Coverage reporters |