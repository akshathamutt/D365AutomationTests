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
  await page.getByText('All sales orders').click();
  await page.getByRole('combobox', { name: 'Filter' }).click();
  await page.getByRole('combobox', { name: 'Filter' }).fill('TestOrder0899');
  await page.getByRole('combobox', { name: 'Filter' }).press('Tab');

  // Click on the element where the value is 'TestOrder0899'
  try {
    await page.locator('input[value="TestOrder0899"]').click();
  } catch (error) {
    console.error('Error clicking on the element with value TestOrder0899:', error);
  }

  await page.getByRole('button', { name: 'Pro forma invoice' }).click();
  await page.getByRole('combobox', { name: 'Quantity' }).click();
  await page.getByRole('option', { name: 'All' }).click();

  // Switch to 'Yes'
  //await page.getByRole('switch', { name: 'Print invoice' }).check({force: true});
  //await page.getByRole('switch', { name: 'Use print management' }).check({force: true});
   await page.getByRole('button', { name: 'OK' }).click();



  

  // Assert that the opened page has the text "Invoice"
  await expect(page.locator('body')).toContainText('Invoice');
});