import fs from "fs";
import path, { dirname } from "path";

export default function checkForEsvApiKeyFile() {
  const currentFile = import.meta.url;
  let searchDir = dirname(currentFile);
  while (!fs.existsSync(path.join(searchDir, "package.json"))) {
    searchDir = path.resolve(searchDir, "../");
  }

  if (fs.existsSync(path.join(searchDir, ".esvApiKey"))) {
    return { found: true, path: path.join(searchDir, ".esvApiKey") };
  }
  return { found: false };
}
