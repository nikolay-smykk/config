import ESBuild from "esbuild";

import config from "./esbuild-config";

const PORT = process.env.PORT ?? 3000;

ESBuild.serve(
  {
    servedir: config.outdir,
    port: Number(PORT)
  },
  {
    ...config
  }
)
  .then(() => {
    console.log("ESBuild server running on port http://localhost:" + PORT);
  })
  .catch(err => {
    console.error("err in esBuild", err);
  });
