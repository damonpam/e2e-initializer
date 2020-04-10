class Page {
  public title(): string {
    return browser.getTitle();
  }
}

export const page = new Page();
