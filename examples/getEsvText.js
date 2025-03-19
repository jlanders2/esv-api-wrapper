import { EsvApiClient, TextParameters } from "../dist/index.js";
import checkForEsvApiKeyFile from "./helpers/checkForEsvApiKeyFile.js";
import readFile from "./helpers/readFile.js";

// To run this example update the API key below and then run the following command:
// npm run text-example

const esvApiKeyFileResult = checkForEsvApiKeyFile();

const token = esvApiKeyFileResult.found
  ? readFile(esvApiKeyFileResult.path)
  : "YOUR_API_KEY_HERE";

const esvApiClient = new EsvApiClient(token);
const textParameters = new TextParameters("John 3:16");
const text = await esvApiClient.text(textParameters);

console.log(text);
