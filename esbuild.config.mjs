import esbuild from "esbuild";

export default {
  target: "esnext",
  entryPoints: ["main.ts"],
  outdir: "./dist",
  bundle: true,
  minify: true,
  sourcemap: true
};
