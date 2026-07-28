import { createRequire } from "node:module";
import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import subsetFont from "subset-font";

const projectRoot = path.resolve(import.meta.dirname, "..");
const require = createRequire(import.meta.url);
const outputDirectory = path.join(projectRoot, "src", "assets", "fonts");
const licenseDirectory = path.join(projectRoot, "public", "fonts");
const textExtensions = new Set([".astro", ".css", ".js", ".json", ".md", ".mdx", ".svg", ".ts", ".tsx", ".txt"]);
const runtimeCharacters = `${Array.from({ length: 95 }, (_, index) => String.fromCharCode(index + 32)).join("")}\u00a0©年月日→↑↓…—「」『』“”‘’`;

const packageDirectory = (packageName) => path.dirname(require.resolve(`${packageName}/package.json`));

const fontSources = [
  {
    packageName: "@fontsource/noto-sans-sc",
    sourceFile: "noto-sans-sc-chinese-simplified-500-normal.woff2",
    outputFile: "site-sans-500.woff2",
  },
  {
    packageName: "@fontsource/noto-sans-sc",
    sourceFile: "noto-sans-sc-chinese-simplified-700-normal.woff2",
    outputFile: "site-sans-700.woff2",
  },
  {
    packageName: "@fontsource/noto-serif-sc",
    sourceFile: "noto-serif-sc-chinese-simplified-500-normal.woff2",
    outputFile: "site-serif-500.woff2",
  },
  {
    packageName: "@fontsource/noto-serif-sc",
    sourceFile: "noto-serif-sc-chinese-simplified-700-normal.woff2",
    outputFile: "site-serif-700.woff2",
  },
];

const collectTextFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectTextFiles(entryPath));
    else if (textExtensions.has(path.extname(entry.name))) files.push(entryPath);
  }

  return files;
};

const writeIfChanged = async (filePath, contents) => {
  try {
    const currentContents = await readFile(filePath);
    if (currentContents.equals(contents)) return false;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  await writeFile(filePath, contents);
  return true;
};

const sourceFiles = await collectTextFiles(path.join(projectRoot, "src"));
const sourceText = await Promise.all(sourceFiles.map((filePath) => readFile(filePath, "utf8")));
const subsetText = [...new Set(`${runtimeCharacters}${sourceText.join("")}`.normalize("NFC"))].join("");

await mkdir(outputDirectory, { recursive: true });
await mkdir(licenseDirectory, { recursive: true });

for (const font of fontSources) {
  const fontPackageDirectory = packageDirectory(font.packageName);
  const inputPath = path.join(fontPackageDirectory, "files", font.sourceFile);
  const outputPath = path.join(outputDirectory, font.outputFile);
  const sourceBuffer = await readFile(inputPath);
  const subsetBuffer = await subsetFont(sourceBuffer, subsetText, { targetFormat: "woff2" });
  const changed = await writeIfChanged(outputPath, subsetBuffer);
  console.log(`[fonts] ${changed ? "generated" : "unchanged"} ${font.outputFile} (${Math.ceil(subsetBuffer.length / 1024)} KiB)`);
}

const licenseSource = path.join(packageDirectory("@fontsource/noto-sans-sc"), "LICENSE");
await copyFile(licenseSource, path.join(licenseDirectory, "OFL.txt"));
console.log(`[fonts] ${subsetText.length} unique characters from ${sourceFiles.length} source files`);
