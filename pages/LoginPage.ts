import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;

  readonly loginLink: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly myAccountLink: Locator;
  readonly errorMessage: Locator;
  readonly cartLabel: Locator;
  readonly wishlistLabel: Locator;

  constructor(page: Page) {

    this.page = page;

    this.loginLink = page.locator('.ico-login');

    this.emailField = page.locator('#Email');

    this.passwordField = page.locator('#Password');

    this.loginButton = page.locator('input[value="Log in"]');

    this.logoutButton = page.locator('.ico-logout');

    this.myAccountLink = page.locator('.account');

    this.errorMessage = page.locator('.validation-summary-errors');

    this.cartLabel = page.locator('.cart-label');

    this.wishlistLabel = page.locator('.wishlist-label');
  }

  async navigate() {

    await this.page.goto(
      'https://demowebshop.tricentis.com/',
      {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      }
    );

    await this.page.waitForLoadState('networkidle');

    await expect(this.loginLink).toBeVisible();
  }

  async openLoginPage() {

    await this.loginLink.click();

    await this.page.waitForLoadState('networkidle');

    await expect(this.emailField).toBeVisible();
  }

  async login(username: string, password: string) {

    await this.openLoginPage();

    await this.emailField.clear();

    await this.emailField.fill(username);

    await this.passwordField.clear();

    await this.passwordField.fill(password);

    await this.loginButton.click();

    await this.page.waitForLoadState('networkidle');

    const logoutVisible =
      await this.logoutButton.isVisible()
        .catch(() => false);

    const accountVisible =
      await this.myAccountLink.isVisible()
        .catch(() => false);

    const cartVisible =
      await this.cartLabel.isVisible()
        .catch(() => false);

    if (
      logoutVisible ||
      accountVisible ||
      cartVisible
    ) {

      console.log('Login Successful');

    } else {

      await this.page.screenshot({
        path: 'test-results/login-failure.png',
        fullPage: true
      });

      throw new Error(
        'Login Failed - User not authenticated'
      );
    }
  }

  async verifyLoginSuccess() {

    await expect(
      this.logoutButton
    ).toBeVisible({
      timeout: 15000
    });

    await expect(
      this.cartLabel
    ).toBeVisible();

    await expect(
      this.wishlistLabel
    ).toBeVisible();
  }

  async logout() {

    if (
      await this.logoutButton.isVisible()
        .catch(() => false)
    ) {

      await this.logoutButton.click();

      await this.page.waitForLoadState(
        'networkidle'
      );

      await expect(
        this.loginLink
      ).toBeVisible();
    }
  }
}
