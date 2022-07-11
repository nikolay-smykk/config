const ESBuild = require("esbuild");

const config = require("./esbuild-config");

const PORT = process.env.PORT || 3000;

ESBuild.serve(
  {
    servedir: config.outdir,
    port: PORT
  },
  {
    ...config
  }
)
  .then(() => {
    console.log("ESBuild server running on port " + PORT);
  })
  .catch(err => {
    console.error("err in esBuild", err);
  });
