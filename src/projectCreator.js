import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { templates } from './templates/index.js';
import { initGit } from './utils/git.js';
import { installDependencies } from './utils/npm.js';

export async function createProject(config) {
  const { name, type, git, install } = config;
  const projectPath = path.join(process.cwd(), name);
  const template = templates[type];
  
  // Create project directory
  await fs.ensureDir(projectPath);

  // Create files from template
  for (const [file, content] of Object.entries(template.files)) {
    const filePath = path.join(projectPath, file);
    await fs.ensureDir(path.dirname(filePath));
    
    if (typeof content === 'object') {
      const finalContent = {
        ...content,
        name: name // Replace null name with project name
      };
      await fs.writeJSON(filePath, finalContent, { spaces: 2 });
    } else {
      await fs.writeFile(filePath, content.trim());
    }
  }

  // Create README.md
  const readme = `# ${name}\n\nProject created with create-project-cli\n\n## Getting Started\n\n\`\`\`bash\nnpm install\nnpm start\n\`\`\``;
  await fs.writeFile(path.join(projectPath, 'README.md'), readme);

  // Create .gitignore
  const gitignore = 'node_modules\n.DS_Store\ndist\n.env\ncoverage\n';
  await fs.writeFile(path.join(projectPath, '.gitignore'), gitignore);

  // Post-creation steps
  if (git) {
    console.log(chalk.blue('\nInitializing git repository...'));
    const gitInit = await initGit(projectPath);
    if (gitInit) {
      console.log(chalk.green('✓ Git repository initialized'));
    }
  }

  if (install) {
    console.log(chalk.blue('\nInstalling dependencies...'));
    const npmInstall = await installDependencies(projectPath);
    if (npmInstall) {
      console.log(chalk.green('✓ Dependencies installed'));
    }
  }
}