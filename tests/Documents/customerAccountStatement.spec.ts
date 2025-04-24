import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Open the Test Environment 
  await page.goto('https://lmi-test.sandbox.operations.dynamics.com/?cmp=lmus&mi=DefaultDashboard');

  //Login using Credentials 
  await page.getByPlaceholder('someone@lesmills.com').fill('Lmi.d365testuser4@lesmills.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lmivic-927!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();


  await page.getByLabel('Modules').locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
  await page.getByText('Customer account statement').first().click();
  await page.getByRole('switch', { name: 'Use print management' }).click();
  await page.getByRole('button', { name: 'Records to include' }).click();
 await page.getByRole('button', { name: ' Filter' }).click();
 await page.getByRole('combobox', { name: 'Criteria' }).click();
 await page.getByRole('combobox', { name: 'Criteria' }).fill('000001');

await page.getByRole('button', { name: 'OK' }).click();
await page.getByRole('button', { name: 'OK' }).click();
await page.getByRole('button', { name: 'Yes' }).click();



});
