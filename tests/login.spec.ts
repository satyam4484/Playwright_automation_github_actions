import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('/');
  const userName: string = process.env.USERNAME || 'Test';
  const passWord: string =  process.env.PASSWORD || 'secret_sauce';

  await page.fill('#user-name', userName!);
  await page.fill('#password', passWord!);

  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});