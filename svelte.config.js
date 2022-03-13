import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@domain': path.resolve('./src/domain'),
					'@components': path.resolve('./src/components'),
					'@store': path.resolve('./src/store'),
					'@routes': path.resolve('./src/routes'),
					'@utils': path.resolve('./src/utils')
				}
			}
		}
	}
};

export default config;
