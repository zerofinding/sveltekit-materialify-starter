// const node = require('@sveltejs/adapter-node');
const node = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

const sveltePreprocess = require("svelte-preprocess");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    ssr: false,

    vite: {
      ssr: {
        external: Object.keys(pkg.dependencies || {})
      }
    }
  },
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["theme"],
    },
  })
};
