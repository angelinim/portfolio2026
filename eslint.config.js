import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['**/dist/', '**/coverage/']),

  // Base: every TypeScript file in the repo, with type-aware rules
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Client: React rules, browser globals
  {
    files: ['client/**/*.{ts,tsx}'],
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Server: Node and Jest globals
  {
    files: ['server/**/*.ts'],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
  },

  // Tooling config files: skip type-aware rules
  {
    files: ['**/*.config.{js,ts}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  eslintConfigPrettier,
]);
