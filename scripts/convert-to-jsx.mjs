import { transformFileAsync } from "@babel/core";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const srcDir = path.join(projectRoot, "src");
const outDir = path.join(projectRoot, "src_js");

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

function targetExt(filePath) {
  if (filePath.endsWith(".tsx")) return filePath.replace(/\.tsx$/, ".jsx");
  if (filePath.endsWith(".ts")) return filePath.replace(/\.ts$/, ".js");
  return filePath;
}

async function transformFile(inputPath, outputPath) {
  const result = await transformFileAsync(inputPath, {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
          development: false,
        },
      ],
      ["@babel/preset-typescript", { isTSX: true, allExtensions: true, allowDeclareFields: true }],
    ],
    plugins: [],
    filename: inputPath,
    babelrc: false,
    configFile: false,
    sourceMaps: false,
    comments: false,
    retainLines: true,
  });

  await ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, result?.code ?? "");
}

async function copyOther(inputPath, outputPath) {
  await ensureDir(path.dirname(outputPath));
  await fs.copyFile(inputPath, outputPath);
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(res);
    } else {
      yield res;
    }
  }
}

async function run() {
  await fs.rm(outDir, { recursive: true, force: true });
  await ensureDir(outDir);

  for await (const absPath of walk(srcDir)) {
    const relPath = path.relative(srcDir, absPath);
    const relOut = targetExt(relPath);
    const outPath = path.join(outDir, relOut);

    if (/\.(ts|tsx)$/.test(absPath)) {
      await transformFile(absPath, outPath);
    } else {
      await copyOther(absPath, outPath);
    }
  }

  // swap directories: backup src -> src_ts, move src_js -> src
  const backup = path.join(projectRoot, "src_ts");
  await fs.rm(backup, { recursive: true, force: true });
  await fs.rename(srcDir, backup);
  await fs.rename(outDir, srcDir);

  console.log("Converted TypeScript to JavaScript/JSX. Backup saved at ./src_ts");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});


