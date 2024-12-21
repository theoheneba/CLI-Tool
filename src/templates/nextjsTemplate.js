export default {
  name: 'nextjs-app',
  description: 'Next.js application with TypeScript and Tailwind CSS',
  files: {
    'package.json': {
      name: null,
      version: '1.0.0',
      scripts: {
        dev: 'next dev',
        build: 'next build',
        start: 'next start'
      },
      dependencies: {
        'next': '^13.4.19',
        'react': '^18.2.0',
        'react-dom': '^18.2.0'
      },
      devDependencies: {
        '@types/node': '^20.5.9',
        '@types/react': '^18.2.21',
        'typescript': '^5.2.2',
        'tailwindcss': '^3.3.3',
        'postcss': '^8.4.29',
        'autoprefixer': '^10.4.15'
      }
    },
    'src/pages/index.tsx': `
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome to Next.js!
                </h1>
                <p>Get started by editing pages/index.tsx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home`
  }
};