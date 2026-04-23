import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://ai-tools-guide-345.pages.dev',

  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
