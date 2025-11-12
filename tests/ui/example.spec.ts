import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.close();
});