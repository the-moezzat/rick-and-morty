import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
  export default defineConfig(({ mode }) => {
    if (mode === 'test') {
      return {
        plugins: [react()],
        test: {
          globals: {
            'ts-jest': {
              tsconfig: './tsconfig.json',
            },
          },
          environment: 'jsdom',
          setupFiles: ['./src/test/setup.ts'],
          // you might want to disable it if you don't have tests that rely on CSS
          // since parsing CSS is slow
          // css: true,
        },
      };
    }

    // Default configuration for other environments
    return {
      plugins: [react()],
    };
  });
