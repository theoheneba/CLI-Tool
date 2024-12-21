# Linting Configuration

Configure linting tools:

```js
// create-project.config.js
export default {
  linting: {
    eslint: true,
    prettier: true,
    config: {
      // Custom rules
    }
  }
}
```

## ESLint Configuration

Default ESLint setup includes:
- Airbnb config
- TypeScript support
- React hooks rules
- Import sorting

## Prettier Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `semi` | boolean | `true` | Add semicolons |
| `singleQuote` | boolean | `true` | Use single quotes |
| `trailingComma` | string | `'es5'` | Trailing comma style |