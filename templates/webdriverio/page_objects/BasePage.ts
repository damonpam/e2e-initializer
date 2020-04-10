export class BasePage {
  private readonly _url: string;

  constructor(url: string) {
    const baseUrl = BasePage.getBrowserBaseUrl();
    this._url = `${baseUrl}/${url}`;
  }

  get url(): string {
    return this._url;
  }

  private static getBrowserBaseUrl(): string {
    if (!browser.config.baseUrl) {
      throw new Error('"baseUrl" is not defined in wdio config');
    }

    return browser.config.baseUrl;
  }
}
