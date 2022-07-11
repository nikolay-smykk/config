const ESBuild = require("esbuild");
const settings = require("./esbuild-config");

ESBuild.build(settings)
  .then(() => {
    console.log("ESBuild build complete");
  })
  .catch(err => {
    console.log("build error", err);
  });
