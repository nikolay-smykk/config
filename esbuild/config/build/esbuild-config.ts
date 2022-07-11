import { BuildOptions } from "esbuild";
import path from "path";
import { CleanPlug } from "./plugins/CleanPlug";

const mode = process.env.MODE || "development";

const isDev = mode === "development";
const isProd = mode === "production";

const resolveRoot = (...paths: string[]) => {
  return path.resolve(__dirname, "../", "..", ...paths);
};
const settings: BuildOptions = {
  outdir: resolveRoot("build"),
  entryPoints: [resolveRoot("src", "index.tsx")],
  entryNames: "[dir]/bundle.[name]-[hash]",
  bundle: true,
  tsconfig: resolveRoot("tsconfig.json"),
  minify: isProd,
  sourcemap: true,
  loader: {
    ".png": "file",
    ".svg": "file",
    ".jpg": "file"
  },
  plugins: [CleanPlug]
};

export default settings;
