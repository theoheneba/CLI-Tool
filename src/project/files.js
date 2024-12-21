import fs from 'fs-extra';
import path from 'path';
import { templates } from '../templates/index.js';
import { processTemplate } from '../utils/templateProcessor.js';

export async function createProjectFiles(config) {
  const { name, type } = config;
  const projectPath = path.join(process.cwd(), name);
  const template = templates[type];
  
  await fs.ensureDir(projectPath);
  const files = processTemplate(template, config);
  
  for (const [file, content] of Object.entries(files)) {
    const filePath = path.join(projectPath, file);
    await fs.ensureDir(path.dirname(filePath));
    await writeFile(filePath, content);
  }
  
  await createReadme(projectPath, name);
  await createGitignore(projectPath);
}

async function writeFile(filePath, content) {
  if (typeof content === 'object') {
    await fs.writeJSON(filePath, content, { spaces: 2 });
  } else {
    await fs.writeFile(filePath, content.trim());
  }
}

async function createReadme(projectPath, name) {
  const readme = `# ${name}\n\nProject created with create-project-cli\n\n## Getting Started\n\n\`\`\`bash\nnpm install\nnpm start\n\`\`\``;
  await fs.writeFile(path.join(projectPath, 'README.md'), readme);
}

async function createGitignore(projectPath) {
  const gitignore = 'node_modules\n.DS_Store\ndist\n.env\ncoverage\n';
  await fs.writeFile(path.join(projectPath, '.gitignore'), gitignore);
}