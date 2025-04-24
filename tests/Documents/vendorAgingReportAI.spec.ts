import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Open the Test Environment 
  await page.goto('https://lmi-uat.sandbox.operations.dynamics.com/?cmp=lmss&mi=DefaultDashboard');

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
  await page.getByText('All sales orders').click();
  await page.getByRole('combobox', { name: 'Filter' }).click();
  await page.getByRole('combobox', { name: 'Filter' }).fill('lmss-so-105108');
  await page.getByRole('combobox', { name: 'Filter' }).press('Enter');

  // Click on the element where the value is 'LMSS-SO-105108'
  try {
    await page.locator('input[value="LMSS-SO-105108"]').click();
  } catch (error) {
    console.error('Error clicking on the element with value LMSS-SO-105108:', error);
  }

  await page.getByLabel('Journals').getByRole('button', { name: 'Invoice' }).click();
  await page.getByRole('button', { name: 'View', exact: true }).click();
  await page.getByLabel('Use print management').click();

   // Assert that the opened page has the text "Invoice"
   await expect(page.locator('body')).toContainText('Invoice');
});