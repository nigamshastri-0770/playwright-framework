import { Page, Locator } from '@playwright/test';

export class BooksPage {

  readonly page: Page;
  readonly sortDropdown: Locator;
  readonly pageSizeDropdown: Locator;
  readonly fictionBook: Locator;
  readonly quantityInput: Locator;
  readonly addWishlistButton: Locator;
  readonly addCompareButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.sortDropdown = page.locator('#products-orderby');

    this.pageSizeDropdown = page.locator('#products-pagesize');

    this.fictionBook = page.getByText('Fiction EX');

    this.quantityInput = page.locator('#addtocart_78_EnteredQuantity');

    this.addWishlistButton = page.locator('#add-to-wishlist-button-78');

    this.addCompareButton = page.locator('.button-2.add-to-compare-list-button');
  }

  async sortBooks() {

    await this.sortDropdown.selectOption({ index: 1 });

    await this.pageSizeDropdown.selectOption('4');
  }

  async selectBook() {
    await this.fictionBook.click();
  }

  async addToWishlist() {

    await this.quantityInput.fill('2');

    await this.addWishlistButton.click();
  }

  async addToCompare() {
    await this.addCompareButton.click();
  }
}