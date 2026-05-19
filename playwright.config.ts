import { defineConfig } from '@playwright/test';
import process from 'process';

export default defineConfig({

  testDir: './tests',

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    browserName: 'chromium',

    headless: !!process.env.CI,s

    baseURL: 'https://demowebshop.tricentis.com/',

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure'
  }
});