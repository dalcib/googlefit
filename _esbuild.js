const { buildSync } = require("esbuild");

const env = process.argv[2];
let dev = true;
if (env === "build") {
  dev = false;
}

buildSync({
  entryPoints: ["./node_modules/expo/AppEntry.js"],
  outfile: "./web/bundle" + (dev ? ".dev" : "") + ".js",
  minify: !dev,
  sourcemap: !dev,
  bundle: true,
  define: {
    global: "window",
    "process.env.NODE_ENV": dev ? '"development"' : '"production"',
    __DEV__: dev ? "true" : "false"
  },
  loader: { ".js": "jsx", ".png": "file", ".ttf": "file" },
  // prettier-ignore
  resolveExtensions: [".web.tsx",".web.ts",".web.jsx",".web.js",".tsx",".ts",".jsx",".js",],
  tsconfig: "tsconfig.json"

  //sourcemap: boolean | 'inline' | 'external',
  //format: 'iife' | 'cjs' | 'esm',
  //globalName: string,
  //target: string | string[],
  //strict: boolean | 'nullish-coalescing' | 'optional-chaining' | 'class-fields'[],

  //minify: boolean,
  //minifyWhitespace: boolean,
  //minifyIdentifiers: boolean,
  //minifySyntax: boolean,

  //jsxFactory: string,
  //jsxFragment: string,
  //define: { [key: string]: string },
  //pure: string[],

  //color: boolean,
  //logLevel: 'info' | 'warning' | 'error' | 'silent',
  //errorLimit: number,

  //bundle: boolean,
  //splitting: boolean,
  //outfile: string,
  //metafile: string,
  //outdir: string,
  //platform: 'browser' | 'node',
  //color: boolean,
  //external: string[],
  //loader: { [ext: string]: 'js' | 'jsx' | 'ts' | 'tsx' | 'json' | 'text' | 'base64' | 'file' | 'dataurl' | 'binary' },
  //resolveExtensions: string[],
  //write: boolean,
  //tsconfig: string,
  //outExtension: { [ext: string]: string },

  //entryPoints: string[],
  //stdin: StdinOptions,
}); //.catch(() => process.exit(1));
