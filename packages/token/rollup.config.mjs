import path from "path";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

// Resolve __dirname in ES modules
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: path.join(__dirname, "src/index.ts"), // The entry point of your UI package
  output: [
    {
      file: path.resolve(__dirname, "dist/index.js"),
      format: "cjs", // CommonJS for Node.js compatibility
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, "dist/index.esm.js"),
      format: "esm", // ES Module for bundlers like Webpack or Rollup
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves dependencies from node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(),
  ],
};
