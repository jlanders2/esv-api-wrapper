import * as errors from "../errors/errors";
import { SearchParameters } from "../models/SearchParameters";
import { TextParameters } from "../models/TextParameters";

class HttpClient {
  private url: string;
  private defaultHeaders: any;
  constructor(url: string, defaultHeaders: any = {}) {
    this.url = url;
    this.defaultHeaders = defaultHeaders;
  }

  getAsync = async (endpoint: string, parameters: object) => {
    let requestUrlWithParameters = this.createGetUrl(endpoint, parameters);
    return await fetch(requestUrlWithParameters, {
      method: "GET",
      headers: { ...this.defaultHeaders },
    });
  };

  // function might go somewhere else
  // probably doesn't have to though
  private createGetUrl(endpoint: string, parameters: object): string {
    let requestUrl = new URL(`${this.url}/${endpoint}`);

    for (const [key, value] of Object.entries(parameters)) {
      requestUrl.searchParams.set(key, value);
    }

    return requestUrl.toString();
  }
}

export class EsvApiClient extends HttpClient {
  constructor(tokenApiKey: string) {
    const defaultHeaders = {
      Authorization: `Token ${tokenApiKey}`,
      "Content-Type": "application/json",
    };
    super("https://api.esv.org/v3", defaultHeaders);
  }

  /**
   * Provides passages from the ESV in plain text.
   *
   * ESV API documentation -> https://api.esv.org/docs/passage-text/
   */
  text = async (parameters: TextParameters): Promise<any> => {
    const response = await this.getAsync(
      "passage/text/",
      parameters.buildParametersObject()
    );

    const data = await response.json(); // Create an object specifically for this, probably include response info too
    return data;
  };

  /**
   * Provides passages from the ESV in HTML.
   *
   * ESV API documentation -> https://api.esv.org/docs/passage-html/
   */
  html = async () => {
    errors.notImplemented();
  };

  /**
   * Provides an MP3 file of a given passage being read.
   *
   * ESV API documentation -> https://api.esv.org/docs/passage-audio/
   */
  audio = async () => {
    errors.notImplemented();
  };

  /**
   * Provides verse results for a word or phrase search of the ESV text.
   *
   * ESV API documentation -> https://api.esv.org/docs/passage-search/
   */
  search = async (parameters: SearchParameters): Promise<any> => {
    const response = await this.getAsync(
      "passage/search/",
      parameters.buildParametersObject()
    );

    const data = await response.json(); // Create an object specifically for this, probably include response info too
    return data;
  };
}
