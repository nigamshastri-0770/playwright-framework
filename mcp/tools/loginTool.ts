import { chromium } from '@playwright/test';

export async function loginTool() {

  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto(
    'https://demowebshop.tricentis.com/login'
  );

  await page.locator('#Email')
    .fill('test@gmail.com');

  await page.locator('#Password')
    .fill('Test@123');

  await page.locator(
    "input[value='Log in']"
  ).click();
}