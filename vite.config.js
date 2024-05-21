import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vite as vidstack } from 'vidstack/plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), vidstack()],
})