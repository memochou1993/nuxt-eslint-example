import stylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  stylistic.configs.customize({
    semi: true,
    jsx: true,
    braceStyle: '1tbs',
  }),
  {
    ignores: [
      '.nuxt/**',
    ],
  },
  {
    rules: {
      'no-console': 1,
    },
  },
];
