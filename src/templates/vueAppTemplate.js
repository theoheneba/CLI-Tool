export default {
  name: 'vue-app',
  description: 'Vue.js application with Vite',
  files: {
    'package.json': {
      name: null,
      version: '1.0.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'vite build',
        preview: 'vite preview'
      },
      dependencies: {
        'vue': '^3.3.4'
      },
      devDependencies: {
        '@vitejs/plugin-vue': '^4.3.4',
        'vite': '^4.4.9'
      }
    },
    'src/App.vue': `
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>
    <h1>Vite + Vue</h1>
    <button @click="count++">Count is {{ count }}</button>
  </div>
</template>`,
    'src/main.js': `
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`
  }
};