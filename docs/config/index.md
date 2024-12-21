# Configuration

## Project Configuration

Create a `create-project.config.js` file in your project root:

```js
export default {
  // Project settings
  name: 'my-app',
  
  // Features
  typescript: true,
  testing: {
    framework: 'vitest',
    coverage: true
  },
  linting: {
    eslint: true,
    prettier: true
  },

  // Dependencies
  dependencies: {
    add: ['@tanstack/react-query'],
    remove: []
  }
}
```

## Configuration Options

### General Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | string | undefined | Project name |
| `description` | string | undefined | Project description |
| `version` | string | '1.0.0' | Initial version |

### Feature Flags

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `typescript` | boolean | `false` | Enable TypeScript |
| `testing` | object/boolean | `true` | Testing configuration |
| `linting` | object/boolean | `true` | Linting configuration |
| `prettier` | boolean | `true` | Enable Prettier |

### Testing Configuration

```js
testing: {
  framework: 'vitest', // 'vitest' | 'jest'
  coverage: true,      // Enable coverage reporting
  config: {}          // Framework-specific config
}
```

### Linting Configuration

```js
linting: {
  eslint: true,       // Enable ESLint
  prettier: true,     // Enable Prettier
  config: {}         // Custom linting rules
}
```