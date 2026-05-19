import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async verifyLoginSuccess() {
    await expect(this.heading).toHaveText('Secure Area');
  }

  async logout() {
    await this.logoutButton.click();
  }
}