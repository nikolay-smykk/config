import { Plugin } from "esbuild";
import { rm } from "fs/promises";

export const CleanPlug: Plugin = {
  name: "env",
  setup(build: any) {
    build.onStart(async () => {
      console.log("envPlugin start");

      try {
        const outDir = build.initialOptions.outdir;
        if (outDir) {
          console.log("envPlugin rm outfile", outDir);
          await rm(outDir, { recursive: true });
        }
      } catch (err) {
        console.log("CleanPlug ->", err);
      }
    });
    build.onEnd(() => {
      console.log("envPlugin end");
    });
  }
};
