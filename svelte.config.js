import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '' : '/REPO_NAME';

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
