import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

const eddieRoot = path.resolve(__dirname, '../../eddie-design-system');
const useLocalEddie = fs.existsSync(eddieRoot);

export default defineConfig({
  resolve: {
    alias: useLocalEddie
      ? {
          '@brad-frost-web/eddie-web-components': path.join(eddieRoot, 'packages/eddie-web-components'),
          '@brad-frost-web/eddie-design-tokens': path.join(eddieRoot, 'packages/eddie-design-tokens'),
          '@brad-frost-web/eddie-icons': path.join(eddieRoot, 'packages/eddie-icons'),
          '@brad-frost-web/eddie-recipes': path.join(eddieRoot, 'packages/eddie-recipes'),
        }
      : {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        includePaths: useLocalEddie
          ? [
              path.join(eddieRoot, 'packages/eddie-design-tokens/core/scss'),
              path.join(eddieRoot, 'packages/eddie-design-tokens'),
              path.join(eddieRoot, 'packages'),
            ]
          : [],
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        'accelerating-conflict': path.resolve(__dirname, 'accelerating-conflict/index.html'),
        'concentrating-wealth': path.resolve(__dirname, 'concentrating-wealth/index.html'),
        'climate-chaos': path.resolve(__dirname, 'climate-chaos/index.html'),
        'destroying-ecosystems': path.resolve(__dirname, 'destroying-ecosystems/index.html'),
        'suppressing-health': path.resolve(__dirname, 'suppressing-health/index.html'),
        'entrenching-inequality': path.resolve(__dirname, 'entrenching-inequality/index.html'),
        'manufacturing-ignorance': path.resolve(__dirname, 'manufacturing-ignorance/index.html'),
        'maximizing-despair': path.resolve(__dirname, 'maximizing-despair/index.html'),
      },
    },
  },
});
