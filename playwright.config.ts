import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  retries: 0,

  workers: 1,

  fullyParallel: false,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    browserName: 'chromium',

    channel: 'chrome',

    headless: !!process.env.CI,

    baseURL: 'https://demowebshop.tricentis.com/',

    screenshot: 'only-on-failure',

    trace: 'off'
  }
});