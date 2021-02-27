import scss from "rollup-plugin-scss";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const isDev = process.env.NODE_ENV === "development";

const SOURCE_DIR = "./src";
const PUBLIC_DIR = "./public";
const DEST_DIR = `${PUBLIC_DIR}/build`;

export default {
  input: `${SOURCE_DIR}/index.js`,
  output: {
    file: `${DEST_DIR}/bundle.js`,
    format: "iife",
  },
  plugins: [
    // Common plugins
    scss({ output: `${DEST_DIR}/style.css`, watch: `${SOURCE_DIR}/scss` }),

    // Development only plugins
    isDev && serve({ contentBase: PUBLIC_DIR, port: 3000 }) && livereload(),

    // Production only plugins
    !isDev && terser(),
  ],
};
