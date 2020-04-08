class Page {
  public async title(): Promise<string> {
    return await browser.getTitle();
  }

  public async url(): Promise<string> {
    return browser.getUrl();
  }
}

export const page = new Page();
