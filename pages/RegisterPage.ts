import { Page, Locator, expect } from '@playwright/test';
import { generateEmail } from '../utils/helpers';

export class RegisterPage {

  readonly page: Page;
  readonly registerLink: Locator;
  readonly genderMale: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {

    this.page = page;

    this.registerLink = page.locator('text=Register');

    this.genderMale = page.locator('#gender-male');

    this.firstName = page.locator('#FirstName');

    this.lastName = page.locator('#LastName');

    this.email = page.locator('#Email');

    this.password = page.locator('#Password');

    this.confirmPassword = page.locator('#ConfirmPassword');

    this.registerButton = page.locator('#register-button');

    this.successMessage = page.locator('.result');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async registerUser() {

    const email = generateEmail();

    await this.registerLink.click();

    await this.genderMale.click();

    await this.firstName.fill('Nigam');

    await this.lastName.fill('Shastri');

    await this.email.fill(email);

    await this.password.fill('Test@123');

    await this.confirmPassword.fill('Test@123');

    await this.registerButton.click();
  }

  async verifyRegistrationSuccess() {
    await expect(this.successMessage).toContainText('Your registration completed');
  }
}