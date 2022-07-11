const mode = process.env.MODE || "development";

const path = require("path");

const isDev = mode === "development";
const isProd = mode === "production";

const resolveRoot = (...paths) => {
  return path.resolve(__dirname, "../", "..", ...paths);
};

module.exports = {
  outdir: resolveRoot("build"),
  entryPoints: [resolveRoot("src", "index.tsx")],
  entryNames: "bundle",
  bundle: true,
  tsconfig: resolveRoot("tsconfig.json"),
  minify: isProd,
  sourcemap: true
};
