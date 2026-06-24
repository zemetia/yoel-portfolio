import { createRequire } from 'module';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const require = createRequire(import.meta.url);

/** @type {import('eslint').Linter.FlatConfig[]} */
const nextConfig = require('eslint-config-next/core-web-vitals');

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    ignores: ['src/lib/generated/**', 'src/generated/**'],
  },
  ...nextConfig,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    settings: {
      react: { version: '19' },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];

export default eslintConfig;
