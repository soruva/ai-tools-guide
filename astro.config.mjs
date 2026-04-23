import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ai-tools-guide-345.pages.dev',

  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },

  build: {
    format: 'directory'
  }
});
