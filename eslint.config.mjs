// @ts-check
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: ['dist/', '.astro/'],
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...eslintPluginAstro.configs.recommended,
    ],
  },
);
