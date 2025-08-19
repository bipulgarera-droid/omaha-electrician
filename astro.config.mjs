import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://omaha-electrician.vercel.app',
  output: 'static',
  adapter: vercel(),
});


