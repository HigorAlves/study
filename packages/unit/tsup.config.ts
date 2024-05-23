import { defineConfig } from 'tsup'

export default defineConfig({
	minify: true,
	entry: ['src/index.ts'],
	splitting: false,
	sourcemap: true,
	clean: true,
	target: 'node20',
	format: 'esm',
})
