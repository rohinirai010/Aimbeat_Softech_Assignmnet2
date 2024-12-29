import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      branch: 'gh-pages',
    }),
  ],
  base: '/Aimbeat_Softech_Assignmnet2/', 
});
