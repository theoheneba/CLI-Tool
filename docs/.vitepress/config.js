import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Create Project CLI",
  description: "A flexible project scaffolding tool",
  base: '/Celetec-CLI-Docs/',
  
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Templates', link: '/templates/' },
      { text: 'Configuration', link: '/config/' },
      { text: 'GitHub', link: 'https://github.com/theoheneba/Celetec-CLI-Docs' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' }
        ]
      },
      {
        text: 'Templates',
        items: [
          { text: 'Overview', link: '/templates/' },
          { text: 'React', link: '/templates/react' },
          { text: 'Vue', link: '/templates/vue' },
          { text: 'Next.js', link: '/templates/nextjs' },
          { text: 'Express', link: '/templates/express' },
          { text: 'Node API', link: '/templates/node-api' },
          { text: 'CLI Tool', link: '/templates/cli' },
          { text: 'Customization', link: '/templates/customization' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Overview', link: '/config/' },
          { text: 'TypeScript', link: '/config/typescript' },
          { text: 'Testing', link: '/config/testing' },
          { text: 'Linting', link: '/config/linting' }
        ]
      }
    ],

    footer: {
      copyright: 'Copyright © 2024 Celeteck'
    }
  }
})