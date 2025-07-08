import path from 'path';
import { fileURLToPath } from 'url';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: path.join(__dirname, 'src/index.ts'),
  output: [
    {
      file: path.join(__dirname, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.join(__dirname, 'dist/index.esm.js'),
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: (id) =>
    /^react($|\/)/.test(id) ||
    /^react-dom($|\/)/.test(id) ||
    /^styled-components($|\/)/.test(id) ||
    /^@babel\/runtime($|\/)/.test(id),
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    typescript(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-transform-runtime', { useESModules: true }],
        [
          'babel-plugin-styled-components',
          { displayName: true, ssr: true, pure: true },
        ],
      ],
    }),
    styles(),
    terser(),
  ],
};
