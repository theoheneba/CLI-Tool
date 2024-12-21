# Create Project CLI

A powerful and flexible CLI tool for scaffolding various types of projects with best practices built-in.

## Features

- 🚀 Multiple project templates
  - React (Vite)
  - Vue.js
  - Next.js
  - Express + TypeScript
  - Node.js API
  - CLI Tools
- ⚡️ Lightning fast project creation
- 🔧 Customizable templates
- 📦 Automatic dependency installation
- 🔄 Git initialization
- 🎯 TypeScript support
- 🧪 Testing setup included
- 🎨 Linting and formatting configured

## Installation

```bash
npm install -g create-project-cli
```

Or use directly with npx:

```bash
npx create-project-cli@latest my-app
```

## Usage

### Interactive Mode (Recommended)

```bash
create-project my-app
```

### Quick Start with Defaults

```bash
create-project my-app --yes
```

### Options

- `-g, --git`: Initialize git repository
- `-i, --install`: Install dependencies after creation
- `-y, --yes`: Skip prompts and use defaults

## Templates

### React Application
- Modern React with Vite
- Optional TypeScript support
- Testing with Vitest
- Tailwind CSS styling

### Vue Application
- Vue 3 with Composition API
- Vite build system
- Optional TypeScript
- Vitest for testing

### Next.js Application
- Next.js 13 with App Router
- TypeScript by default
- Tailwind CSS
- API routes support

### Express + TypeScript
- Express.js with TypeScript
- Jest for testing
- OpenAPI documentation
- Docker setup

### Node.js API
- Express.js REST API
- JWT authentication
- Database integration
- API documentation

### CLI Tool
- Commander.js for CLI
- Interactive prompts
- TypeScript support
- Testing setup

## Configuration

Create a `create-project.config.js` in your project:

```js
export default {
  typescript: true,
  testing: {
    framework: 'vitest',
    coverage: true
  },
  linting: {
    eslint: true,
    prettier: true
  }
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

Copyright © 2024 Celeteck