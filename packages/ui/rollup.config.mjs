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

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
};

export default {
  input: path.join(__dirname, 'src/index.ts'), // The entry point of your UI package
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.js'),
      format: 'cjs', // CommonJS for Node.js compatibility
      sourcemap: true,
      globals,
      exports: 'named',
    },
    {
      file: path.resolve(__dirname, 'dist/index.esm.js'),
      format: 'esm', // ES Module for bundlers like Webpack or Rollup
      sourcemap: true,
      globals,
      exports: 'named',
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'main'],
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: false,
            pure: true,
          },
        ],
      ],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    styles(), // Bundle CSS (including for styled-components)
    terser(), // Minify the output for production builds
  ],
  external: ['react', 'react-dom', 'styled-components', /^@babel\/runtime/], // Mark peer dependencies as external
};
