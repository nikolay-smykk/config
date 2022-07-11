import ESBuild from "esbuild"
import settings from "./esbuild-config"

ESBuild.build(settings)
  .then(() => {
    console.log("ESBuild build complete");
  })
  .catch(err => {
    console.log("build error", err);
  });
