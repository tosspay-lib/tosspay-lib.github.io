import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '' : '/tosspay-lib.github.io';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: basePath,
    },
    prerender: {
      default: true,
    },
  },
};
