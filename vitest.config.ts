import swc from 'unplugin-swc';
import { defineProject } from 'vitest/config';

export default defineProject({
  test: {
    globals: true,
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({}),
  ],
});
