module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    // JavaScript rules
    // Turn off unused vars so we can delegate this to unused-imports.
    'no-unused-vars': 'off',
    'no-console': 'warn',

    // TypeScript rules
    // Turn off unused vars so we can delegate this to unused-imports.
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'on',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // React rules
    'react/display-name': 'warn',

    // Unused imports
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // Import sorting rules
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'], // {s}css files
          ['^.+\\.s?css$'], // Lib and hooks

          // shared imports
          ['^@/shared/types'],
          ['^@/shared/mocks'],
          ['^@/shared/utils'],
          ['^@/shared'],

          // client imports
          ['^@/client/types'],
          ['^@/client/components'],
          ['^@/client/hooks'],
          ['^@/client/utils'],
          ['^@/client'],

          // server imports
          ['^@/server/types'],
          ['^@/server/entity'],
          ['^@/server/dtos'],
          ['^@/server/middleware', '^@/server/pipes'],
          ['^@/server/utils'],
          ['^@/server'],

          ['^@/'],

          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ], // relative paths up until 3 level

          ['^'],
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
}
