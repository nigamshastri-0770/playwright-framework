import { Page, Locator } from '@playwright/test';

export class CartPage {

  readonly page: Page;
  readonly countryDropdown: Locator;
  readonly stateDropdown: Locator;
  readonly estimateShippingButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.countryDropdown = page.locator('#CountryId');

    this.stateDropdown = page.locator('#StateProvinceId');

    this.estimateShippingButton = page.locator("input[value='Estimate shipping']");
  }

  async estimateShipping() {

    await this.countryDropdown.selectOption('United States');

    await this.stateDropdown.selectOption('California');

    await this.estimateShippingButton.click();
  }
}