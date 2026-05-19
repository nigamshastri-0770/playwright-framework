import { Page, Locator } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly booksMenu: Locator;
  readonly cartLink: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.booksMenu = page.locator("a[href='/books']");

    this.cartLink = page.locator('.cart-label');

    this.searchBox = page.locator('#small-searchterms');

    this.searchButton = page.locator("input[value='Search']");
  }

  async openBooks() {
    await this.booksMenu.click();
  }

  async searchProduct(product: string) {

    await this.searchBox.fill(product);

    await this.searchButton.click();
  }
}