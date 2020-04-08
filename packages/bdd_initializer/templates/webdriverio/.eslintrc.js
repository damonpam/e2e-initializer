/* eslint-disable */

module.exports = {
  parserOptions: {
    ecmaVersion: 8
  },
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:wdio/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'error',
    'simple-import-sort/sort': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'for-direction': 'error'
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint', 'simple-import-sort'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:wdio/recommended',
        'plugin:chai-expect/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
      ],
      rules: {
        'no-console': 'error',
        'simple-import-sort/sort': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        'sort-keys': [
          'warn',
          'asc',
          {
            caseSensitive: true,
            natural: true
          }
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              accessors: 'off',
              constructors: 'no-public'
            }
          }
        ],
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false
          }
        ]
      }
    }
  ]
};
