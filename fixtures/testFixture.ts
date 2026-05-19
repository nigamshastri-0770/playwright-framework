import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { BooksPage } from '../pages/BooksPage';
import { CartPage } from '../pages/CartPage';

type MyFixtures = {

  loginPage: LoginPage;

  registerPage: RegisterPage;

  homePage: HomePage;

  booksPage: BooksPage;

  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {

    await use(new LoginPage(page));
  },

  registerPage: async ({ page }, use) => {

    await use(new RegisterPage(page));
  },

  homePage: async ({ page }, use) => {

    await use(new HomePage(page));
  },

  booksPage: async ({ page }, use) => {

    await use(new BooksPage(page));
  },

  cartPage: async ({ page }, use) => {

    await use(new CartPage(page));
  }

});

export { expect };