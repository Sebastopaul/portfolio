/// <reference types="vitest" />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test.setup.ts'],
    globals: true, // Permet d'importer les fonctions de test de Vitest dans chaque fichier de test sans avoir à les importer manuellement dans chaque fichier de test
    include: ['src/**/*.spec.ts']
  }
});
