import * as esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: "dist",
    format: "esm", // Generate ES modules
    platform: "node",
    target: "node14",
    format: "esm",
    sourcemap: true,
  })
  .catch(() => process.exit(1));
