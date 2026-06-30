const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const portfolioHtmlPath = path.join(process.cwd(), "public", "portofolio", "index.html");
const html = fs.readFileSync(portfolioHtmlPath, "utf8");
let obfuscatedCount = 0;

const output = html.replace(/<script>([\s\S]*?)<\/script>/g, function (match, scriptBody) {
  obfuscatedCount += 1;

  const result = JavaScriptObfuscator.obfuscate(scriptBody, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.25,
    identifierNamesGenerator: "hexadecimal",
    numbersToExpressions: true,
    renameGlobals: true,
    selfDefending: true,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 8,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayEncoding: ["base64"],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 2,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 4,
    stringArrayWrappersType: "function",
    stringArrayThreshold: 0.85,
    transformObjectKeys: true,
    unicodeEscapeSequence: true
  });

  return `<script>${result.getObfuscatedCode()}</script>`;
});

if (obfuscatedCount < 1) {
  throw new Error("Expected to obfuscate at least 1 inline portfolio script, obfuscated 0.");
}

fs.writeFileSync(portfolioHtmlPath, output);
console.log(`Obfuscated ${obfuscatedCount} inline portfolio scripts in ${portfolioHtmlPath}`);
