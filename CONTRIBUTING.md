# Contributing to create-project-cli

We love your input! We want to make contributing to create-project-cli as easy and transparent as possible.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/create-project-cli.git`
3. Create your feature branch: `git checkout -b feature/amazing-feature`
4. Install dependencies: `npm install`
5. Make your changes
6. Test your changes: `npm test`
7. Commit your changes: `git commit -m 'Add amazing feature'`
8. Push to the branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

## Adding New Templates

1. Create a new file in `src/templates/`
2. Follow the existing template structure
3. Add template to `src/templates/index.js`
4. Add tests in `tests/templates/`

## Development Setup

```bash
git clone https://github.com/your-username/create-project-cli.git
cd create-project-cli
npm install
npm link # Makes the CLI available globally during development
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the documentation if needed
3. Add tests for new features
4. Ensure the test suite passes
5. Get approval from maintainers

## Code Style

- Use ES Modules
- Follow existing code style
- Add JSDoc comments for functions
- Keep files small and focused