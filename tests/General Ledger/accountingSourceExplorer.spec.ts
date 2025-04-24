import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Open the Test Environment 
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard');

  //Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'General ledger' }).click();
  await page.getByText('Accounting source explorer').click();
  await page.getByRole('button', { name: 'Voucher transactions' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  /*console.log('Verifying table data...');
  const table = await page.locator('table'); // Locate the table on the page
  //await expect(table).toBeVisible(); // Ensure the table is visible
  await expect(table).toContainText('Ledger account');*/
});



  /*
  Improvements: 
  1. Select specific dates 
  2. Check Balance value = 0.00
  */
