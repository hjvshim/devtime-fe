import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import jest from 'eslint-plugin-jest';
import pluginQuery from '@tanstack/eslint-plugin-query';
import tsdoc from 'eslint-plugin-tsdoc';

export default defineConfig([
  globalIgnores([
    'src/shared/configs/**',
    'docs/**',
    'node_modules/**',
    'public/**',
    'dist/**',
    'dist/**',
    'src/shared/assets/**',
    '.husky/**',
    '.git/**',
    '**/*.css',
  ]),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect', // 설치된 버전 자동으로 감지
      },
    },
    plugins: { tsdoc, react: reactPlugin, 'react-hooks': reactHooks, 'react-refresh': reactRefresh, 'jsx-a11y': jsxA11y, jest, 'query': pluginQuery },
    extends: [
      tseslint.configs.recommended,
      reactPlugin.configs.flat['jsx-runtime'], 
      reactRefresh.configs.vite, 
      pluginQuery.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      ...tseslint.configs.recommended.languageOptions,
      ...reactPlugin.configs.flat.recommended.languageOptions,
    },
    rules: {
      'no-console': ['warn', { allow: ['info', 'debug', 'warn', 'error'] }],
      semi: ['error', 'always'],
      'tsdoc/syntax': 'warn',
    },
  },
  { files: ['**/*.{js,mjs,cjs,jsx}'], extends: [tseslint.configs.disableTypeChecked] },
  { files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'], ...jest.configs['flat/recommended'] },
  eslintConfigPrettier, // ESLint에서 formatting 관련 규칙 비활성화 - formatting은 prettier로 처리
]);
