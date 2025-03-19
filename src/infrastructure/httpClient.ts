export class HttpClient {
  private url: string;
  private defaultHeaders: object;
  constructor(url: string, defaultHeaders: object = {}) {
    this.url = url;
    if (/\/$/.test(this.url)) {
      this.url = this.url.slice(0, -1);
    }
    this.defaultHeaders = this.defaultHeaders;
  }

  // function might go somewhere else
  // probably doesn't have to though
  private createGetUrl(endpoint: string, parameters: object): string {
    // add base url
    let requestUrl = `${this.url}/`;
    // add endpoint
    if (/^\//.test(endpoint)) {
      requestUrl += endpoint.slice(1);
    } else {
      requestUrl += endpoint;
    }

    // Create params string
    let parametersString = "";
    let index = 0;
    for (const [key, value] of Object.entries(parameters)) {
      parametersString += `${key}=${value}`;
      if (index > 0) {
        parametersString += "&";
      }
      index++;
    }

    // add params
    if (parametersString.length > 0) {
      requestUrl += parametersString;
    }

    return requestUrl;
  }

  get = (endpoint: string, parameters: object) => {
    let requestUrl = this.createGetUrl(endpoint, parameters);
    // make get request
  };
}
