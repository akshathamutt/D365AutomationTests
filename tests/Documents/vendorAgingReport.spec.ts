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
  await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
  await page.getByText('Vendor aging report').click();
  await page.getByRole('button', { name: 'OK' }).click();
 //await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmss&mi=Output%3AVendAgingBalance');

  const frame = await page.locator('iframe[title="Vendor aging report"]').contentFrame();
  await frame.getByLabel('Page 1').getByText('Vendor aging').click();

  // Assert that the vendor aging report is loaded
   // await expect(frame.getByText('Vendor aging')).
  });