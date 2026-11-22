import fs from "node:fs";
if (!fs.existsSync(".output/public/build.json") || !fs.existsSync("dist-worker/index.js")) {
  console.error("Missing prebuilt artifacts");
  process.exit(1);
}
console.log("SiriusTrack prebuilt bundle verified OK.");
