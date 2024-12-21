# Template Customization

You can customize your project by creating a `create-project.config.js` file:

```js
export default {
  // Enable TypeScript
  typescript: true,
  
  // Configure testing setup
  testing: {
    framework: 'vitest',
    coverage: true
  },
  
  // Configure linting
  linting: {
    eslint: true,
    prettier: true
  }
}
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| typescript | boolean | false | Enable TypeScript support |
| testing | boolean/object | true | Configure testing setup |
| linting | boolean/object | true | Configure linting tools |
| prettier | boolean | true | Enable Prettier formatting |