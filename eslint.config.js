import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  reactPlugin.configs.flat.recommended,

  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'react-refresh/only-export-components': 'off',
    },
  },
])
