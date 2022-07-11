const mode = process.env.MODE || "development";

const path = require("path");

const isDev = mode === "development";
const isProd = mode === "production";

module.exports = {
  outdir: path.resolve(__dirname, "..", "..", "build"),
  entryPoints: [path.resolve(__dirname, "..", "..", "src", "index.tsx")],
  entryNames: "bundle",
  bundle: true,
  tsconfig: path.resolve(__dirname, "..", "..", "tsconfig.json"),
  minify: isProd,
  sourcemap: true
};
