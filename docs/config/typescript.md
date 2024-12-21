# TypeScript Configuration

Enable TypeScript support in your project configuration:

```js
// create-project.config.js
export default {
  typescript: true
}
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `strict` | boolean | `true` | Enable strict type checking |
| `jsx` | string | `'react'` | JSX factory to use |
| `paths` | object | `{}` | Path aliases |

## Type Definitions

The CLI automatically adds necessary type definitions:
- React: `@types/react`
- Node.js: `@types/node`
- Testing: `@types/jest` or Vitest types