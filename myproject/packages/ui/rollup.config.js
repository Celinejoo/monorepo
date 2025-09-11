import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import url from "@rollup/plugin-url";

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.mjs", format: "esm", sourcemap: true },
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: [".mjs", ".js", ".json", ".ts", ".tsx"] }),
      commonjs(),
      url({
        include: ["**/*.woff2", "**/*.woff", "**/*.ttf"],
        limit: 0,
        fileName: "assets/fonts/[name]-[hash][extname]", // 캐시 친화적 네이밍
      }),
      // replace({
      //   preventAssignment: true,
      //   values: {
      //     "process.env.NODE_ENV": JSON.stringify(
      //       process.env.NODE_ENV || "production"
      //     ),
      //   },
      // }),
      postcss({
        inject: true,
        extract: false,
        minimize: true,
        modules: false,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
  {
    input: "src/tokens.ts",
    output: [
      { file: "dist/tokens.mjs", format: "esm" },
      { file: "dist/tokens.cjs", format: "cjs", exports: "named" },
    ],
    plugins: [peerDepsExternal(), typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "src/tokens.ts",
    output: [{ file: "dist/tokens.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
