module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    // Use the automatic JSX runtime (no need to import React for JSX)
    jsxRuntime: 'automatic'
  },
  settings: { react: { version: 'detect' } },
  env: { browser: true, node: true, es2021: true },
  rules: {
    // With the automatic JSX runtime React import is not required
    'react/react-in-jsx-scope': 'off',
    // TypeScript handles prop types; disable prop-types rule for TSX
    'react/prop-types': 'off',
    // Warn on unused vars instead of error to avoid failing CI on story files
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }]
  },
};
