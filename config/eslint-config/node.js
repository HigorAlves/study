const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'standard',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'prettier',
		'eslint-config-turbo',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
		'import/resolver': {
			typescript: {
				project,
			},
		},
	},
	rules: {
		semi: ['error', 'never'],
		'no-multiple-empty-lines': ['error', { max: 1 }],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'node_modules/',
		'dist/',
	],
	overrides: [
		{
			files: ['*.js?(x)', '*.ts?(x)'],
		},
	],
}
