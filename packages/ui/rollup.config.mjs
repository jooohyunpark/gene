import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

// Resolve __dirname in ES modules
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: path.join(__dirname, 'src/index.ts'), // The entry point of your UI package
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.js'),
      format: 'cjs', // CommonJS for Node.js compatibility
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, 'dist/index.esm.js'),
      format: 'esm', // ES Module for bundlers like Webpack or Rollup
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves dependencies from node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: false,
          },
        ],
      ],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    styles(), // Bundle CSS (including for styled-components)
    terser(), // Minify the output for production builds
  ],
  external: ['react', 'react-dom', 'styled-components'], // Mark peer dependencies as external
};
