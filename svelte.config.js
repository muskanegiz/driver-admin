import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	kit: { 
		adapter: adapter(),
		prerender: {
			handleMissingId:'ignore',
		  }
	},
		
	preprocess: vitePreprocess()
};

export default config;
