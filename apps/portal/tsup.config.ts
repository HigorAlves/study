import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
	minify: !options.watch,
	entry: ['src/index.ts'],
	splitting: false,
	sourcemap: true,
	clean: true,
	target: 'node20',
	format: 'esm',
}))
